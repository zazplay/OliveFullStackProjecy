using AutoMapper;
using Ovile_DAL_Layer.Entities;
using Ovile_BLL_Layer.DTO;
using OliveFullStack.PresentationLayer.Models.Requests;
using OliveFullStack.PresentationLayer.Models.Responses;

public class AutoMaperProfiles : Profile
{
    public AutoMaperProfiles()
    {

        CreateMap<News, NewsDTO>().ReverseMap();
        CreateMap<News, CreateNewsDTO>().ReverseMap();

        CreateMap<NewsDTO, AddNewsRequest>().ReverseMap();
        CreateMap<NewsDTO, UpdateNewsRequest>().ReverseMap();
        CreateMap<NewsDTO, NewsResponse>()
            .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
            .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title))
            .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description))
            .ForMember(dest => dest.ImgSrc, opt => opt.MapFrom(src => src.ImgSrc))
            .ForMember(dest => dest.Source, opt => opt.MapFrom(src => src.Source))
            .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => src.CreatedAt));

        CreateMap<AuthResponseDTO, AuthResponseDTO>().ReverseMap();
    }
}
