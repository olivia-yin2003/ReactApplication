using Python.Runtime;

namespace REFApplication.Model
// export IRONPYTHONPATH=/Library/Frameworks/IronPython.framework/Versions/3.4.1/
{
    public class GoogleCloud : ISTT
    {
        public Audio ProcessInput(Audio audio)
        {
            var mappedAudio = Mapper.MapGenericInput(audio);
            throw new NotImplementedException();
        }

        public void Run()
        {
            Runtime.PythonDLL = @"C:\Users\olivi\AppData\Local\Programs\Python\Python311\python311.dll";
            PythonEngine.Initialize();
            Py.GIL();
            
            string file = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location) + @"/GoogleCloud.py";
            // throw new NotImplementedException();

            if (!PythonEngine.IsInitialized)// Since using asp.net, we may need to re-initialize
                {
                PythonEngine.Initialize();
                Py.GIL();
                }
                            
                using (var scope = Py.CreateScope())
                            {
                                string code = File.ReadAllText(file); // Get the python file as raw text
                                var scriptCompiled = PythonEngine.Compile(code, file); // Compile the code/file
                                scope.Execute(scriptCompiled); // Execute the compiled python so we can start calling it.
                                // PyObject exampleClass = scope.Get("exampleClass"); // Lets get an instance of the class in python
                                // PyObject pythongReturn = exampleClass.InvokeMethod("sayHello"); // Call the sayHello function on the exampleclass object
                                //dict? result = pythongReturn.AsManagedObject(typeof(string)) as string; // convert the returned string to managed string object
                            } 
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
