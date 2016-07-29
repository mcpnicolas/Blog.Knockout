using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace KnockoutBlog
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.EnableCors();

            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{bid}/{pid}",
                defaults: new { action = RouteParameter.Optional, bid = RouteParameter.Optional, pid = RouteParameter.Optional }
            );
        }
    }
}
