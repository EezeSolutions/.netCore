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
    public class Create
    {

        public class Command : IRequest {
        
        public Activity? activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                context.Activities.Add(request.activity);

                await context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}
