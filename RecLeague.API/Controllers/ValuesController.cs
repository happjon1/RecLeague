using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace RecLeague.API.Controllers
{
    [EnableCors(origins: "http://localhost:63072", headers: "*", methods: "*")]
    public class ValuesController : ApiControllerBase
    {
        public class TestResponse
        {
            public List<string> Items { get; set; }
            public string Name { get; set; }
        }
        // GET api/values
        public HttpResponseMessage Get()
        {
            var newResponse = new TestResponse();
            newResponse.Name = "testing name";
            var item = new List<string>() { "value1", "value2" };
            newResponse.Items = item;
            return this.ResponseOk(newResponse);       
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
