package it.uniroma1.fabbricasemantica.servlet.user;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import it.uniroma1.fabbricasemantica.servlet.BaseServlet;

@WebServlet(name="SignupServlet", urlPatterns="/signup.jsp")
public class SignupServlet extends BaseServlet implements MetodiUserServlet
{
	private static final long serialVersionUID = 8484501789787L;
	
	
	@Override
	protected void doSomething(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		//TODO implementare la logica per la registrazione
		HttpSession session = request.getSession(); 
		session.setAttribute("username", request.getParameter("emailSignup"));
		System.out.println(diz);
		boolean isLoggedIn = session.getAttribute("username") != null;
		System.out.println("signupServlet: isLoggedIn " + isLoggedIn);
		
		
		
		String username = (String) request.getParameter("emailSignup");
		System.out.println("signupServlet: username " + username);
		String password = (String) request.getParameter("passwordSignup");
		System.out.println("signupServlet: password " + password);
		String ripetiPassword = (String) request.getParameter("ripetiPassword");
		System.out.println("signupServlet: ripeti Password " + ripetiPassword);
		String ita = (String) request.getParameter("checkboxIta");
		String eng = (String) request.getParameter("checkboxEng");
		String altraLingua = (String) request.getParameter("altreLingue");
		String livLingua = (String) request.getParameter("livelloAltraLingua");

		boolean IsIn = leggiSignup(username, password, ripetiPassword);
		
		if (IsIn) response.sendRedirect("signup.html");
		else 
			{	
				listCreation(username);
				session.setAttribute("username", username);
				session.setAttribute("pagine", pagine);
				session.setAttribute("dizionario", diz);				
				System.out.println(pagine + " appena iscritto");
				System.out.println(diz + " appena iscritto");
				scriviSignup(username, password, ita, eng, altraLingua, livLingua);
				response.sendRedirect("home.html");
			}
	}

}
