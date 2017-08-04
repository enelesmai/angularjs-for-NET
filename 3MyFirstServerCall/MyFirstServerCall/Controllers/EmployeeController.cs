using MyFirstServerCall.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyFirstServerCall.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
            MyOrgEntities OE = new MyOrgEntities();
            var emps = OE.Employees.ToList();
            return Json(emps, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetByDid(int id)
        {
            MyOrgEntities OE = new MyOrgEntities();
            var emps = OE.Employees.Where(e => e.Did == id);
            return Json(emps, JsonRequestBehavior.AllowGet);
        }
    }
}