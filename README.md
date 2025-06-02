# Additional Question

1. If you use JSON data, how would you structure it to support future scalability and maintainability?

I would Create folder constant which inside is another folder called caption, inside i would create .JSON file where it will be named depending on the page using it, the content would be nested object where the first key would be indicate the sections and then inside is an object with they key where we would use it

For Example:

       

```jsx
constant/
│   ├── landing.json                 
│   ├── navbar.json         
```

```jsx
{
	hero_section:{
			caption_line1: 'BOUTIQUE HOTEL STEPS FROM',
			caption_line2: 'SEMINYAK BEACH FRONT',
			arrival: 'Arrival',
			departure: 'Departure'
			}
}
```

```jsx

        <div className="text-content text-center mb-[100px] relative z-20">
          <p className="uppercase text-[.9rem] sm:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem] font-medium leading-[100%]">
          {hero_section.caption_line1}
          </p>
          <p className="uppercase text-[1.3rem] sm:text-[2.5rem] lg:text-[2.8rem] xl:text-[3rem] font-medium">
           {hero_section.caption_line2}
          </p>
        </div>
```

However, in the context of internationalization , inside the folder I will add another layer where it group by the language desired, which then the i18n library will manage the language behaviour

```jsx
constant/
	├── en/
	│   ├── landing.json
	│   ├── navbar.json
	├── id/
	│   ├── landing.json
	│   ├── navbar.json
```

2. If you decide to create your own API, which technology or framework would you use and why?
    
I would use **Go (Golang)** to build my backend service. Go is known for its **high performance**, **low memory footprint**, and **fast startup times**, making it ideal for lightweight APIs, such as those used for landing pages or marketing sites.
    
Additionally, Go has been **growing in popularity** and has a strong and supportive community, which makes **debugging and learning easier**. The simplicity of the language also leads to faster development cycles and maintainable code.
    
One potential downside is that Go’s **security ecosystem is still maturing** compared to long-established frameworks like Java or .NET. However, with proper practices and community-backed tools, secure APIs can still be built effectively in Go.

    
3. How would you configure a custom domain (for example, [www.clientwebsite.com](http://www.clientwebsite.com/)) to point to your deployed project on Vercel?

Buy domain from [godaddy.com](http://godaddy.com) or [niagahoster.com](http://niagahoster.com) to buy domain name.

in the vercel dashboard app:
    - Go to your Vercel dashboard.
    - Open the project.
    - Navigate to the **Settings** tab → **Domains**.
    - Click **“Add”**, then enter the full custom domain (e.g., `www.clientwebsite.com`).
    - Vercel will show DNS instructions specific to your DNS provider.

    
4. If your project requires an admin panel to manage the website content, what technologies and approaches would you choose?
    
I would use ReactJS or NextJS but with the pages router, since we don’t need SEO or server side rendering, making sure it’s light weight, the backend would be Go (Golang) with Strapi as it’s database.
    
5. What techniques would you use to ensure the website loads quickly even on slow internet connections?

Create a fallback method for each images so that when it doesnt load, it would show the fallback image.

6. If you implement a form, how would you securely send the data to the backend server?
    - Use HTTPS encryption for data transmission
    - Implement CSRF tokens for request verification
    - Validate and sanitize form inputs on both client and server
    - Add rate limiting to prevent abuse
    - Enable proper authentication and authorization
    - Hash sensitive data before storage
    - Use appropriate HTTP methods (POST for submissions)

