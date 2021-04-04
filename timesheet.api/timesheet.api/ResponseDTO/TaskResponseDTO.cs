using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace timesheet.api.ResponseDTO
{
    public class TaskResponseDTO
    {
        public int Id { get; set; }

       
        public string Name { get; set; }

       
        public string Description { get; set; }

        public string EmployeeName { get; set; }

        public DateTime Date { get; set; }
    }
}
