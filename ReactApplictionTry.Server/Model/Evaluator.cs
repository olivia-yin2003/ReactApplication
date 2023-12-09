/*using Python.Runtime;

namespace REFApplication.Model
{
    public class Evaluator
    {
        Runtime.PythonDLL = @"C:\Users\olivi\AppData\Local\Programs\Python\Python311\python311.dll";
            PythonEngine.Initialize();
            Py.GIL();
            
            string file = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location) + @"/eval.py";
            // throw new NotImplementedException();

            if (!PythonEngine.IsInitialized)// Since using asp.net, we may need to re-initialize
                {
                PythonEngine.Initialize();
                Py.GIL();
                }
                            
                using (var scope = Py.CreateScope())
                            {
                                string code = File.ReadAllText('/Users/sathv/Desktop/REFApplication/REFApplication/Model/eval.py'); // Get the python file as raw text
                                var scriptCompiled = PythonEngine.Compile(code, file); // Compile the code/file
                                scope.Execute(scriptCompiled); // Execute the compiled python so we can start calling it.
                                // PyObject exampleClass = scope.Get("exampleClass"); // Lets get an instance of the class in python
                                // PyObject pythongReturn = exampleClass.InvokeMethod("sayHello"); // Call the sayHello function on the exampleclass object
                                // string? result = pythongReturn.AsManagedObject(typeof(string)) as string; // convert the returned string to managed string object
                            } 
        }
    }

*/