// test python code
using Python.Runtime;
Console.WriteLine("hello world");

string pythonDll = @"C:\\Users\\olivi\\AppData\\Local\\Programs\\Python\\Python311\\python311.dll";
Environment.SetEnvironmentVariable("PYTHONNET_PYDLL", pythonDll);

PythonEngine.Initialize();
using (Py.GIL())
{
    PythonEngine.RunSimpleString(@"print(""hello world from python!"")");
    string file = @"C:\\Users\\olivi\\source\\repos\\ReactApplictionTry\\ReactApplictionTry.Server\\Model\\STTs\\GoogleCloud.py";
    using (var scope = Py.CreateScope())
    {
        string code = File.ReadAllText(file); // Get the python file as raw text
        var scriptCompiled = PythonEngine.Compile(code, file); // Compile the code/file
        scope.Execute(scriptCompiled); // Execute the compiled python so we can start calling it.
                                       //scriptCompiled.InvokeMethod("returndict");
                                       // PyObject Pythonnet = scope.Get("Pythonnet"); // Lets get an instance of the class in python
                                       // PyObject pythongReturn = Pythonnet.InvokeMethod("returndict"); // Call the sayHello function on the exampleclass object
                                       // string? result = pythongReturn.AsManagedObject(typeof(string)) as string; // convert the returned string to managed string object
                                       // //Console.WriteLine(result)
    }
}

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
