namespace moviefinder.dto.usuario;

public class RedefinicaoSenha
{
    public string? Nome { get; set; }
    
    public string? Senha { get; set; }
    
    public string? NovaSenha { get; set; }

    public RedefinicaoSenha(string nome, string senha, string novaSenha)
    {
        Nome = nome;
        Senha = senha;
        NovaSenha = novaSenha;
    }
}