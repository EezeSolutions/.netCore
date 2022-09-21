using AutoMapper;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application
{
    public class Mapper : Profile
    {
        public Mapper()
        {
            CreateMap<Activity, Activity>();
        }
    }
}
