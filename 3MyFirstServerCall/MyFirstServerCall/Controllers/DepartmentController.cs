using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MyFirstServerCall.Models;

namespace MyFirstServerCall.Controllers
{
    public class DepartmentController : Controller
    {
        // GET: Department
        public ActionResult Index()
        {
            MyOrgEntities OE = new MyOrgEntities();
            var depts = OE.Departments.ToList();
            return Json(depts, JsonRequestBehavior.AllowGet);
        }
        
    }
}