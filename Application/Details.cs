﻿using DatabaseManagement;
using Domain;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application
{
    public class Details
    {
        public class Query : IRequest<Activity> {
        
            public Guid Id { get; set; }
        }
        public class Handeler : IRequestHandler<Query, Activity>
        {
            private readonly DataContext context;

            public Handeler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Activities.FindAsync(request.Id);
            }
        }
    }
}
