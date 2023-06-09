﻿using Newtonsoft.Json;

namespace moviefinder.dto.pessoa;

public class TopRatedFilmesDto
{
        [JsonProperty("poster_path")]
        public string PosterPath { get; set; }
        
        public bool Adult { get; set; }
        
        public string Overview { get; set; }
        
        [JsonProperty("release_date")]
        public string ReleaseDate { get; set; }
        
        [JsonProperty("genre_ids")]
        public IEnumerable<int> GenreIds { get; set; }
        
        public int Id { get; set; }
        
        [JsonProperty("original_title")]
        public string OriginalTitle { get; set; }
        
        [JsonProperty("original_language")]
        public string OriginalLanguage { get; set; }
        
        public string Title { get; set; }
        
        [JsonProperty("backdrop_path")]
        public string BackdropPath { get; set; }
        
        public double Popularity { get; set; }
        
        [JsonProperty("vote_count")]
        public int VoteCount { get; set; }
        
        public bool Video { get; set; }
        
        [JsonProperty("vote_average")]
        public double VoteAverage { get; set; }

}