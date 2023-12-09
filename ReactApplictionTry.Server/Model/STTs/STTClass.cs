namespace REFApplication.Model
{
    public class STTClass : ISTT
    {
        public Audio ProcessInput(Audio audio)
        {
            var mappedAudio = Mapper.MapGenericInput(audio);
            throw new NotImplementedException();
        }

        public void Run()
        {
            throw new NotImplementedException();
        }

        public void Metrics()
        {
            var speed = Speed.SpeedCalc();
            var memory = Memory.MemoryCalc();
            throw new NotImplementedException();
        }

        public string[] ProcessOutput(string[] args)
        {
            var outputList = Mapper.MapGenericOutput(args);
            throw new NotImplementedException();
        }
    }
}
