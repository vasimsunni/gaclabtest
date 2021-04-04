using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using timesheet.data;
using timesheet.model;

namespace timesheet.business
{
   public class TaskService
    {
        public TimesheetDb db { get; }

        public TaskService(TimesheetDb db)
        {
            this.db = db;
        }

        public IQueryable<Task> GetAllTask()
        {
            return this.db.Tasks;
        }

        public IQueryable<Task> GetBetweenDates(DateTime firstDate, DateTime lastDate)
        {
            var result = db.Tasks.Where(x => x.Date.Date >= firstDate.Date && x.Date.Date <= lastDate.Date);
            return result;
        }

        public int save(Task task)
        {
            if (task.Id > 0)
            {
                db.Set<Task>().Update(task);
                db.SaveChanges();

                return task.Id;
            }
            else
            {
                db.Set<Task>().Add(task);
                db.SaveChanges();

                return task.Id;
            }
        }
    }
}
