using Microsoft.EntityFrameworkCore;

namespace API_Chat.Models
{
    public class MyDBContext : DbContext
    {
        public MyDBContext(DbContextOptions<MyDBContext> options) : base(options)
        {
        }
        public DbSet<Message> Message { get; set; }
    }
    public class Message
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }

    }
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}