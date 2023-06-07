using System.Diagnostics.Metrics;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using moviefinder.dto.usuario;
using moviefinder.Entities;
using Snacker.Domain.Entities;

namespace moviefinder.service;

public class UsuarioService
{
    private readonly ApplicationDbContext _context;

    public UsuarioService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<bool> CadastrarUsuario(Usuario usuario)
    {
        try
        {
            var usuarioDb = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == usuario.Email);
            if (usuarioDb != null)
            {
                return false;
            }

            usuario.Senha = BCrypt.Net.BCrypt.HashPassword(usuario.Senha);
            _context.Add(usuario);
            await _context.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ocorreu um erro: {e.Message}");
            throw;
        }
    }

    public async Task<Usuario?> Login(UsuarioDto usuarioDto)
    {
        try
        {
            var usuario = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == usuarioDto.Email);
            return usuario;
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ocorreu um erro: {e.Message}");
            throw;
        }
    }

    public async Task<UsuarioAuthDto> InformacoesUser(string userId)
    {
        var usuario = await _context.Usuarios.SingleOrDefaultAsync(u => u.Id == int.Parse(userId));
        var usuarioAuthDto = new UsuarioAuthDto();
        if (usuario != null)
        
        {
            usuarioAuthDto.Nome = usuario.Nome;
            usuarioAuthDto.Email = usuario.Email;
            usuarioAuthDto.Idade = usuario.Idade;
            usuarioAuthDto.Genero = usuario.Genero;
            usuarioAuthDto.Id = usuario.Id;
        }

        return usuarioAuthDto;
    }
    public async Task<bool> DeletarUsuario(string userId)
    {
        try
        {
            var usuarioDb = _context.Usuarios.AsNoTracking().FirstOrDefault(u => u.Id == int.Parse(userId));
            _context.Usuarios.Remove(usuarioDb);
            await _context.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ocorreu um erro: {e.Message}");
            throw;
        }
    }
    public async Task<bool> AlterarUsuario(Usuario usuario)
    {
        try
        {
            usuario.Senha = BCrypt.Net.BCrypt.HashPassword(usuario.Senha);
            _context.Update(usuario);
            await _context.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            Console.WriteLine($"Ocorreu um erro: {e.Message}");
            throw;
        }
    }

    public async Task<bool> isFilmeFavoritado(string usuarioId, string movieId)
    {
        var filmeFavoritado = await _context.FilmesFavoritos
            .AnyAsync(ff => ff.IdUsuario.Id == int.Parse(usuarioId) && ff.IdFilme.TheMovieDbId == int.Parse(movieId));

        return filmeFavoritado;
    }
}