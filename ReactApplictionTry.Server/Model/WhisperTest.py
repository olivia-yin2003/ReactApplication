import jiwer
import psutil
import filecmp

print(psutil.cpu_stats())
print(psutil.cpu_times())
with open('C:/Users/olivi/Documents/School/Fall2023/Clinic/Audios/Refik_Anadol_Ted_Talk_1.txt') as f1:
    f1s = f1.read().replace('\n', '')
with open('C:/Users/olivi/Documents/School/Fall2023/Clinic/Audios/RefikAnadolTedTalk1truth.txt') as f2:
    f2s = f2.read().replace('\n', '')

fTest1 = open("C:/Users/olivi/Documents/School/Fall2023/Clinic/Audios/Test1.txt", "r")
fTest2 = open("C:/Users/olivi/Documents/School/Fall2023/Clinic/Audios/Test1.txt", "r")

fTest1s = fTest1.read()
fTest2s = fTest2.read()

wer = jiwer.wer(f1s, f2s) # Word Error Rate
mer = jiwer.mer(f1s, f2s) # Match Error Rate
wil = jiwer.wil(f1s, f2s) # Word Information Lost
cer = jiwer.cer(f1s, f2s) # Character Error Rate
wip = jiwer.wip(f1s, f2s) # Word Information Preserved

Errors = {"WER": wer, "MER" : mer, "WIL": wil, "CER" : cer, "WIP" : wip}
print(Errors)
print(psutil.cpu_stats())
print(psutil.cpu_times())
