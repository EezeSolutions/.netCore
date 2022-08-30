using DatabaseManagement;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext context;
        public ActivitiesController(DataContext context)
        {
            this.context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Activity>>> Getactivity()
        {
            return await this.context.Activities.ToListAsync();

        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> getSingleActivity(Guid id)
        {
            return await this.context.Activities.FindAsync(id);

        }
    }


}
