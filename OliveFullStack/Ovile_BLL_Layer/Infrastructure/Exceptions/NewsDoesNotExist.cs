namespace Ovile_BLL_Layer.Infrastructure.Exceptions
{

    public class NewsDoesNotExist : Exception
    {
        public NewsDoesNotExist(string id)
        : base($"News with id ${id} does not exist.")
        { }
    }

}