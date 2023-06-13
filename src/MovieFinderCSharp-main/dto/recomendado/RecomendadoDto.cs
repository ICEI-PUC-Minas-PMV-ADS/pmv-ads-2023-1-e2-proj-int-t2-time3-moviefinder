using Newtonsoft.Json;

namespace moviefinder.dto.recomendado;

public class RecomendadoDto
{
    [JsonProperty("Results")]
    public List<RecomendacoesFilmeDto> Results { get; set; }

    public RecomendadoDto(List<RecomendacoesFilmeDto> results)
    {
        Results = results;
    }
}