using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CRUDEg.Startup))]
namespace CRUDEg
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
