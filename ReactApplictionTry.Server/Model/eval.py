# !pip3 install python-Levenshtein
# %pip install jiwer
# %pip install nest-asyncio
# !pip3 install pydub
#import nest_asyncio
#nest_asyncio.apply()

import pandas as pd
import csv

csv_0 = 'C:\Users\olivi\Desktop\EV1-MAURER-2021-04-02_08-37-06-000.csv'
#csv_1 = '/Users/sathv/Desktop/NBL_GroundTruth_DataSet/EV1-MAURER-2021-04-02_08-37-06-001.csv'
#csv_2 = '/Users/sathv/Desktop/NBL_GroundTruth_DataSet/EV1-MAURER-2021-04-02_08-37-06-002.csv'
#csv_3 = '/Users/sathv/Desktop/NBL_GroundTruth_DataSet/EV1-MAURER-2021-04-02_08-37-06-003.csv'

df_0 = pd.read_csv(csv_0)
#df_1 = pd.read_csv(csv_1)
#df_2 = pd.read_csv(csv_2)
#df_3 = pd.read_csv(csv_3)


df_0['Wav'] = df_0['Wav'].replace(regex=r':', value='_')

print(df_0)

#create dict containing wav as key and text as value
def create_times_dict(df : pd.DataFrame):
    times = {}
    for row, col in df.iterrows():
        try:
            filename = df.iloc[row][1].replace(':', '_')
            times[filename] = df.iloc[row][2]
        except IndexError:
            print('')
    return times
times_0 = create_times_dict(df_0)
#print(times_0)

times_1 = create_times_dict(df_1)
times_2 = create_times_dict(df_2)
times_3 = create_times_dict(df_3)

# Code for similarity metric
from difflib import SequenceMatcher
from jiwer import wer, mer, wil
from Levenshtein import distance

def metrics(asr, ground_truth : str, transcr : str):
    m_wer = round(wer(ground_truth, transcr),2)
    m_mer = round(mer(ground_truth, transcr),2)
    m_wil = round(wil(ground_truth, transcr),2)
    m_sim = round(SequenceMatcher(None, ground_truth, transcr).ratio(),2)
    m_dist = round(distance(transcr, ground_truth),2)
    print(asr, '-','WER:',m_wer, 'MER:',m_mer,'WIL:',m_wil,'SIM:',m_sim,'L-DIST:',m_dist)
    return m_wer, m_mer, m_wil, m_sim, m_dist

def avg(metrics):
  return str(round(sum(metrics) / len(metrics), 2))

colnames = ['Wav', 'Transcription']
transcript_dict0 = pd.read_csv('/Users/sathv/Desktop/REFApplication/REFApplication/transcriptions.csv', names=colnames )
transcript_dict0.dropna(subset=['Transcription'], inplace=True)

#print(transcript_dict0)



# with open('/Users/sathv/Desktop/REFApplication/REFApplication/transcriptions.csv', mode='r') as infile:
#     reader = csv.reader(infile)
#     transcriptdict = {rows[0]:rows[1] for rows in reader if len(rows[1]) > 0}


def evaluate_transcr(transcripts : pd.DataFrame, groundtruthdf):
    #lists to contain metrics for both ASR scores
    groundtruthdict = groundtruthdf.groupby('Wav')['Transcription'].apply(list).to_dict()
    transcriptdict = transcripts.groupby('Wav')['Transcription'].apply(list).to_dict()
    print(groundtruthdict)
    #print(transcriptdict)
    model_wer = []
    model_mer = []
    model_wil = []
    model_sim = []
    model_dist = []

    for key in groundtruthdict.keys():

        if key in transcriptdict.keys():
            #run transcription function
            groundtruth = groundtruthdict[key][0]
            
            model_transcription_text = transcriptdict[key][0]

            #print(model_transcription_text)
        
            #print results from both ASRs

            print('Ground Truth:', groundtruth, )
            print('Model Transcription:', model_transcription_text, '\n')

            #print ASR metrics
            wer, mer, wil, sim, dist = metrics('Model', groundtruth, model_transcription_text)

            #append metrics to ASR score lists

            model_wer.append(wer)
            model_mer.append(mer)
            model_wil.append(wil)
            model_sim.append(sim)
            model_dist.append(dist)
            print('\n')


    #print overall ASR metrics
    print('Average ASR Metrics - WER:', avg(model_wer), 'MER:', avg(model_mer), 'WIL:', avg(model_wil), 'SIM:', avg(model_sim), 'L-DIST:', avg(model_dist), '\n')
    model_metrics = {'wer': float(avg(model_wer)), 'mer': float(avg(model_mer)), 'wil' : float(avg(model_wil)), 'sim' : float(avg(model_sim)), 'l_dist' : float(avg(model_dist))}
    return model_metrics


evaluate_transcr(transcript_dict0, df_0)