import whisper
import warnings
import time
import tracemalloc
import os, psutil
from memory_profiler import profile

@profile
def justWhisper():
    start1 = time.time()
    model = whisper.load_model("large")
    start2 = time.time()
    result = model.transcribe(audio="Model/test.wav")
    end2 = time.time()
    #result = model.transcribe(audio="Audios\carlin_people.wav")
    end1 = time.time()
    print("Time everything took: ", (end1-start1) * 10**3, "ms")
    print("Time transcription took: ", (end2-start2) * 10**3, "ms")

if __name__ == "__main__":
    justWhisper()