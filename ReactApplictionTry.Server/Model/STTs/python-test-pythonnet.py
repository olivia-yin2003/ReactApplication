import whisper
import warnings
import time
import tracemalloc
import os, psutil
from memory_profiler import profile
# GPUTILS doesn't work (computer no GPU?)

# def process_memory():
#     process = psutil.Process(os.getpid())
#     mem_info = process.memory_info()
#     return mem_info.rss

# def profile(func):
#     def wrapper(*args, **kwargs):
 
#         mem_before = process_memory()
#         result = func(*args, **kwargs)
#         mem_after = process_memory()
#         print("{}:consumed memory: {:,}".format(
#             func.__name__,
#             mem_before, mem_after, mem_after - mem_before))
 
#         return result
#     return wrapper
 
# @profile

# def whisperTest():
#     model = whisper.load_model("large")
#     #process = psutil.Process()
#     warnings.simplefilter("ignore")

#     start = time.time()
#     tracemalloc.start()
#     result = model.transcribe(audio="Audios\carlin_people.wav")
#     end = time.time()

#     print(tracemalloc.get_traced_memory())
#     tracemalloc.stop()
#     print("GPUTIL:")
#     #print(process.memory_info().rss)  # in bytes 
#     print("Time took: ", (end-start) * 10**3, "ms")
#     print(result["text"])

@profile
def justWhisper():
    start1 = time.time()
    model = whisper.load_model("large")
    start2 = time.time()
    result = model.transcribe(audio="Audios\carlin_people.wav")
    end2 = time.time()
    #result = model.transcribe(audio="Audios\carlin_people.wav")
    end1 = time.time()
    print("Time everything took: ", (end1-start1) * 10**3, "ms")
    print("Time transcription took: ", (end2-start2) * 10**3, "ms")

if __name__ == "__main__":
    justWhisper()
