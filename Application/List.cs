using DatabaseManagement;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application
{
    public class List
    {
        public class Query : IRequest<List<Activity>> { }

        public class Handeler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext context;

            public Handeler(DataContext context)
            {
                this.context = context;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Activities.ToListAsync();
            }
        }
    }
}
