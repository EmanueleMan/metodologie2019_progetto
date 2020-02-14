package it.uniroma1.fabbricasemantica.servlet.task;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import it.uniroma1.fabbricasemantica.servlet.BaseServlet;

@WebServlet(name = "TaskTranslationAnnotationServlet", urlPatterns = "/translationAnnotation.jsp")
public class TaskTranslationAnnotationServlet extends BaseServlet implements MetodiServlet
{
	private static final long serialVersionUID = 1L;

	/*
	 * nome della pagina
	 */
	private final String pagina = "translationAnnotation";
	
	/*
	 * il metodo controlla se l'utente è connesso, altrimenti lo indirizza in una pagina d'errore.
	 * Se lo è invece, controlla se viene premuto il pulsante next(salva i dati) o skip(non salva niente
	 * e reindirizza in una pagina a caso)
	 */
	@SuppressWarnings("unchecked")
	@Override
	protected void doSomething(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		
		HttpSession session = request.getSession(); 
		boolean isLoggedIn = session.getAttribute("username") != null;
		pagine = (List<String>) session.getAttribute("pagine");
		diz = (HashMap<String, String>) session.getAttribute("dizionario");
		
		
		if (isLoggedIn)
		{
			
			String next = request.getParameter("next");
			
			String traduzione = request.getParameter("traduzione");
		
			if (next == null)
			{	
				skippaPagina(next, pagine, response);
			}
			else 
			{
				salvaPagina(pagina, pagine, diz, traduzione, response);
			}
		}
		else response.sendRedirect("isLoggedIn.jsp");
	}

	

}
