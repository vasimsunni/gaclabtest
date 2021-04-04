using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using timesheet.business;

namespace timesheet.api.controllers
{
    [Route("api/v1/task")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly TaskService taskService;
        private readonly EmployeeService employeeService;
        private readonly IMapper mapper;

        public TaskController(TaskService taskService, EmployeeService employeeService, IMapper mapper)
        {
            this.taskService = taskService;
            this.employeeService = employeeService;
            this.mapper = mapper;
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var items = this.taskService.GetAllTask();
            return new ObjectResult(items);
        }

        [HttpGet("getbydates")]
        public IActionResult GetByDates(DateTime startDate, DateTime endDate)
        {
            var items = this.taskService.GetBetweenDates(startDate, endDate);

            var result = mapper.Map<IEnumerable<ResponseDTO.TaskResponseDTO>>(items);

            foreach(var emp in result)
            {
                if (emp.Id > 0)
                {
                    var employee = employeeService.GetById(emp.Id);

                    if (employee != null) emp.EmployeeName = employee.Name;
                }
            }

            return new ObjectResult(result);
        }

        [HttpPost("save")]
        public IActionResult Save(timesheet.model.Task task)
        {
            try
            {
                int savedId = this.taskService.save(task);

                var response = new
                {
                    Code = 200,
                    Message = "Saved successfuly"
                };

                return new ObjectResult(response);
            }
            catch (Exception ex)
            {
                var response = new
                {
                    Code = 500,
                    Message = "Failed while saving"
                };

                return new ObjectResult(response);
            }
        }
    }
}
