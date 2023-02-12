var cc = initCookieConsent();
// run plugin with your configuration
cc.run({
  current_lang: "en",
  autoclear_cookies: true, // default: false
  page_scripts: true, // default: false
  cookie_name: 'cc_cookie',

  // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
  // delay: 0,                               // default: 0
  // auto_language: null                     // default: null; could also be 'browser' or 'document'
  // autorun: true,                          // default: true
  // force_consent: false,                   // default: false
  // hide_from_bots: true,                   // default: true
  // remove_cookie_tables: false             // default: false
  // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
  // cookie_expiration: 182,                 // default: 182 (days)
  // cookie_necessary_only_expiration: 182   // default: disabled
  // cookie_domain: location.hostname,       // default: current domain
  // cookie_path: '/',                       // default: root
  // cookie_same_site: 'Lax',                // default: 'Lax'
  // use_rfc_cookie: false,                  // default: false
  // revision: 0,                            // default: 0

  languages: {
    en: {
      consent_modal: {
        title: "Cookies 🍪",
        description:
          `<p>
            Oh joy! You've stumbled upon our website, where we love to track your every move. And by track, we mean use cookies.
            Yes, those annoying little things that follow you around the internet like a lost puppy.
           </p>

           <p>
            But hey, at least we're giving you a heads up. By continuing to use our site, you're giving us the green light to invade your privacy and collect data on all your online habits.
            Don't worry, it's not like we're going to sell it to the highest bidder or anything.
           </p>
          
           <p>
            So go ahead, take a look around. But don't say we didn't warn you about the cookies.
            They're like virtual stalkers and they're watching you.
           <p>
           
           <p><button type="button" data-cc="c-settings" class="cc-link">Let me choose</button></p>`,
        primary_btn: {
          text: "Accept all",
          role: "accept_all",
        },
        secondary_btn: {
          text: "Reject all",
          role: "accept_necessary",
        },
      },
      settings_modal: {
        title: "Cookie preferences",
        save_settings_btn: "Save settings",
        accept_all_btn: "Accept all",
        reject_all_btn: "Reject all",
        close_btn_label: "Close",
        cookie_table_headers: [
          { col1: "Name" },
          { col2: "Domain" },
          { col3: "Expiration" },
        ],
        blocks: [
          {
            title: "Cookie usage 📢",
            description:
              `By using our website, you consent to our use of cookies. These tiny digital spies allow us to track your every move, collect data on your habits, and store information on your device. In other words, we'll be watching you, so beware. Don't think that deleting your cookies will stop us, as we'll just keep coming back. So if you value your privacy, it's best to proceed with caution. See <a href="/posts/privacy-policy.html" class="cc-link">privacy policy</a>.`,
          },
          {
            title: "Strictly necessary cookies",
            description:
              `These cookies are essential for the proper functioning of the website. For example the cookie that remembers you don't want the site to store any cookies. Lolcats, lawyers are so funny!`,
            toggle: {
              value: "necessary",
              enabled: true,
              readonly: true,
            },
          },
          {
            title: "Analytics cookies",
            description:
              `Our website uses analytics cookies to track your every move and collect data on your behavior. By using our site, you consent to being monitored. If you value your privacy, be warned.`,
            toggle: {
              value: "analytics",
              enabled: false,
              readonly: false,
            },
            cookie_table: [
              {
                col1: "^_ga",
                col2: "google.com",
                col3: "2 years",
                col4: "description ...",
                is_regex: true,
              },
              {
                col1: "_gid",
                col2: "google.com",
                col3: "1 day",
                col4: "description ...",
              },
            ],
          },
          {
            title: "More information",
            description:
              'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
          },
        ],
      },
    },
  },
});
