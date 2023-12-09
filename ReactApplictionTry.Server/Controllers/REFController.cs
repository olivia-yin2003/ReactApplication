using Microsoft.AspNetCore.Mvc;

namespace ReactApplictionTry.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class REFController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<REFController> _logger;

        public REFController(ILogger<REFController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetREF")]
        public IEnumerable<REF> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new REF
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
