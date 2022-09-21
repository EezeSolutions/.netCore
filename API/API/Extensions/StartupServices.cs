using Application;
using DatabaseManagement;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

namespace API.Extensions
{
    public static class StartupServices
    {

        public static IServiceCollection configServices(this IServiceCollection services, IConfiguration _config)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "WebAPIv5", Version = "v1" });
            });

            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlServer(_config.GetConnectionString("DefaultConnection"));
            }
            );

            services.AddCors(opt =>
            {
                opt.AddPolicy("myPolicy", policy =>
                {
                    policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
                });
            });

            services.AddMediatR(typeof(List.Handeler).Assembly);
            services.AddAutoMapper(typeof(Mapper).Assembly);

            return services;
        }
    }
}
