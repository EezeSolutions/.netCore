using Application;
using DatabaseManagement;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly IMediator mediator;

        public ActivitiesController(IMediator mediator)
        {
            this.mediator = mediator;
        }


        [HttpGet]
        public async Task<ActionResult<List<Activity>>> Getactivity()
        {
            return await mediator.Send(new List.Query());

        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> getSingleActivity(Guid id)
        {
            return await mediator.Send(new Details.Query { Id = id });

        }

        [HttpPost]

        public async Task<IActionResult> createActivity(Activity activity)
        {
            return Ok(await mediator.Send(new Create.Command {activity=activity }));
        
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid Id,Activity activity)
        {
            activity.id = Id;
            return Ok(await mediator.Send(new Edit.Command { Activity = activity }));
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid Id)
        {
            return Ok(await mediator.Send(new Delete.Command { Id = Id }));
        }
    }


}
