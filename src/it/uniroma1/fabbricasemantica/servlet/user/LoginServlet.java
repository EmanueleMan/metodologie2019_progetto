package it.uniroma1.fabbricasemantica.servlet.user;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import it.uniroma1.fabbricasemantica.servlet.BaseServlet;


@WebServlet(name="LoginServlet", urlPatterns="/login.jsp")
public class LoginServlet extends BaseServlet implements MetodiUserServlet
{
	private static final long serialVersionUID = 8484501789787L;
	
	@Override
	protected void doSomething(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//TODO implementare i controlli per l'utente.
		// ridirige l'utente alla pagina home.html
		
		String password = request.getParameter("password");
		System.out.println("loginServlet: password " + password);
		String username = request.getParameter("email");
		System.out.println("loginServlet: username " + username);
		
		boolean isInDB = leggiLogin(username, password, "");
			
		if (isInDB) 
		{
			HttpSession session = request.getSession(); 
			session.setAttribute("username", request.getParameter("email")); 
			session.setAttribute("pagine", pagine); 
			session.setAttribute("dizionario", diz); 
			
			listCreation(username);
			System.out.println(diz);
			System.out.println(pagine);
			
			boolean isLoggedIn = session.getAttribute("username") != null;
			System.out.println("loginServlet: isLoggedIn " + isLoggedIn);
			response.sendRedirect("home.html");
		}	
		else 
		{
			HttpSession session = request.getSession(); 
			session.setAttribute("username", null); 
			boolean isLoggedIn = session.getAttribute("username") != null;
			System.out.println("loginServlet: isLoggedIn " + isLoggedIn);
			response.sendRedirect("login.html");
		}
		
	}

}
