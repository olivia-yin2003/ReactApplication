namespace REFApplication.Model
{
    public interface ISTT
    {
        Audio ProcessInput(Audio audio);
        void Run();
        void Metrics();
        string[] ProcessOutput(string[] args);
    }
}
