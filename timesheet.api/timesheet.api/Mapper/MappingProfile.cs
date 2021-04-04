using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.Extensions.Configuration;

namespace timesheet.api.Mapper
{
    public class MappingProfile:Profile
    {
        public MappingProfile(IConfiguration configuraton)
        {
            CreateMap<timesheet.model.Task, ResponseDTO.TaskResponseDTO>().ReverseMap();
        }
    }
}
