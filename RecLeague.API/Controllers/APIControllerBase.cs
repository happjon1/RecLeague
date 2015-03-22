using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web;
using System.Web.Http;

namespace RecLeague.API.Controllers
{
    public class ApiControllerBase : ApiController
    {
        protected HttpResponseMessage ResponseOk<T>(T model)
        {
            return Response(HttpStatusCode.OK, model);
        }

        protected HttpResponseMessage Response<T>(HttpStatusCode status, T model)
        {
            return new HttpResponseMessage(status) { Content = new ObjectContent(typeof(T), model, new JsonMediaTypeFormatter()) };
        }
    }
}