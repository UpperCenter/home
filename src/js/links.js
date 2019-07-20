let socialLinks = [
  {
    name : "Twitter",
    url: "https://twitter.com"
  },
  {
    name: "OVH Webmail",
    url: "https://pro1.mail.ovh.net"
  },
  {
    name : "Reddit",
    url: "https://www.reddit.com/r/unixporn"
  },
  {
    name: "Youtube",
    url: "https://youtube.com"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com"
  },
    {
    name: "Spotify",
    url: "https://open.spotify.com"
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv"
  },
  {
    name: "Good Cyberpunk Films & TV",
    url: "https://hackermovie.club"
  }
]

let informationLinks = [
  {
    name: "Coinlib",
    url: "https://coinlib.io"
  },
  {
    name: "StackExchange",
    url: "https://stackexchange.com"
  },
  {
    name: "ArchWiki",
    url: "https://wiki.archlinux.org"
  },
  {
   name: "Manjaro Wiki",
   url: "https://wiki.manjaro.org"
  },
  {
    name: "Hacking Lib & Resources",
    url: "https://github.com/sbilly/awesome-security"
  },
  {
    name: "UK Laws & Legislation",
    url: "https://legislation.gov.uk"
  }
]

let universityLinks = [
  {
    name: "Unilearn", 
    url: "https://unilearn.southwales.ac.uk"
  },
  {
    name: "FindIt Library Resources",
    url: "https://library.southwales.ac.uk"
  },
  {
    name: "OneDrive",
    url: "https://bit.ly/One-Drv"
  },
  {
    name: "Google Drive",
    url: "https://drive.google.com"
  },
  {
    name: "USW Referencing Guide",
    url: "https://uppercenter.github.io/home/usw.pdf"
  },
  {
    name: "Microsoft Azure Software",
    url: "https://bit.ly/AzureSoft"
  }
  
]

let newsLinks = [
  {
    name: "Dark Reading",
    url: "https://www.darkreading.com"
  },
  {
    name: "Hacker News",
    url: "https://thehackernews.com"
  },
  {
    name: "Threat Post",
    url: "https://threatpost.com/"
  },
  {
    name: "BBC News",
    url: "https://bbc.co.uk/news"
  },
  {
    name: "Reuters  News",
    url: "https://uk.reuters.com"
  }
]

let infosecLinks = [
  {
    name: "Exploit Database",
    url: "https://www.exploit-db.com"
  },
  {
    name: "US NIST Database",
    url: "https://nvd.nist.gov/vuln/search"
  },
  {
    name: "AbuseIPDB Lookup",
    url: "https://www.abuseipdb.com"
  },
  {
    name: "Shodan",
    url: "https://www.shodan.io"
  },
  {
    name: "Decent WHOIS Lookup",
    url: "https://www.whoxy.com"
  },
  {
    name: "Useful Tools",
    url: "https://tools.kali.org/tools-listing"
  },
  {
    name: "Find Company Employee Email",
    url: "https://hunter.io"
  },
  {
    name: "Google Open Directory Search",
    url: "http://palined.com/search"
  }
]

let weatherIconDict = {
  "200": {
    "label": "thunderstorm with light rain",
    "icon": "storm-showers"
  },
  
  "201": {
    "label": "thunderstorm with rain",
    "icon": "storm-showers"
  },
  
  "202": {
    "label": "thunderstorm with heavy rain",
    "icon": "storm-showers"
  },
  
  "210": {
    "label": "light thunderstorm",
    "icon": "storm-showers"
  },
  
  "211": {
    "label": "thunderstorm",
    "icon": "thunderstorm"
  },
  
  "212": {
    "label": "heavy thunderstorm",
    "icon": "thunderstorm"
  },
  
  "221": {
    "label": "ragged thunderstorm",
    "icon": "thunderstorm"
  },
  
  "230": {
    "label": "thunderstorm with light drizzle",
    "icon": "storm-showers"
  },
  
  "231": {
    "label": "thunderstorm with drizzle",
    "icon": "storm-showers"
  },
  
  "232": {
    "label": "thunderstorm with heavy drizzle",
    "icon": "storm-showers"
  },
  
  "300": {
    "label": "light intensity drizzle",
    "icon": "sprinkle"
  },
  
  "301": {
    "label": "drizzle",
    "icon": "sprinkle"
  },
  
  "302": {
    "label": "heavy intensity drizzle",
    "icon": "sprinkle"
  },
  
  "310": {
    "label": "light intensity drizzle rain",
    "icon": "sprinkle"
  },
  
  "311": {
    "label": "drizzle rain",
    "icon": "sprinkle"
  },
  
  "312": {
    "label": "heavy intensity drizzle rain",
    "icon": "sprinkle"
  },
  
  "313": {
    "label": "shower rain and drizzle",
    "icon": "sprinkle"
  },
  
  "314": {
    "label": "heavy shower rain and drizzle",
    "icon": "sprinkle"
  },
  
  "321": {
    "label": "shower drizzle",
    "icon": "sprinkle"
  },
  
  "500": {
    "label": "light rain",
    "icon": "rain"
  },
  
  "501": {
    "label": "moderate rain",
    "icon": "rain"
  },
  
  "502": {
    "label": "heavy intensity rain",
    "icon": "rain"
  },
  
  "503": {
    "label": "very heavy rain",
    "icon": "rain"
  },
  
  "504": {
    "label": "extreme rain",
    "icon": "rain"
  },
  
  "511": {
    "label": "freezing rain",
    "icon": "rain-mix"
  },
  
  "520": {
    "label": "light intensity shower rain",
    "icon": "showers"
  },
  
  "521": {
    "label": "shower rain",
    "icon": "showers"
  },
  
  "522": {
    "label": "heavy intensity shower rain",
    "icon": "showers"
  },
  
  "531": {
    "label": "ragged shower rain",
    "icon": "showers"
  },
  
  "600": {
    "label": "light snow",
    "icon": "snow"
  },
  
  "601": {
    "label": "snow",
    "icon": "snow"
  },
  
  "602": {
    "label": "heavy snow",
    "icon": "snow"
  },
  
  "611": {
    "label": "sleet",
    "icon": "sleet"
  },
  
  "612": {
    "label": "shower sleet",
    "icon": "sleet"
  },
  
  "615": {
    "label": "light rain and snow",
    "icon": "rain-mix"
  },
  
  "616": {
    "label": "rain and snow",
    "icon": "rain-mix"
  },
  
  "620": {
    "label": "light shower snow",
    "icon": "rain-mix"
  },
  
  "621": {
    "label": "shower snow",
    "icon": "rain-mix"
  },
  
  "622": {
    "label": "heavy shower snow",
    "icon": "rain-mix"
  },
  
  "701": {
    "label": "mist",
    "icon": "sprinkle"
  },
  
  "711": {
    "label": "smoke",
    "icon": "smoke"
  },
  
  "721": {
    "label": "haze",
    "icon": "day-haze"
  },
  
  "731": {
    "label": "sand, dust whirls",
    "icon": "cloudy-gusts"
  },
  
  "741": {
    "label": "fog",
    "icon": "fog"
  },
  
  "751": {
    "label": "sand",
    "icon": "cloudy-gusts"
  },
  
  "761": {
    "label": "dust",
    "icon": "dust"
  },
  
  "762": {
    "label": "volcanic ash",
    "icon": "smog"
  },
  
  "771": {
    "label": "squalls",
    "icon": "day-windy"
  },
  
  "781": {
    "label": "tornado",
    "icon": "tornado"
  },
  
  "800": {
    "label": "clear sky",
    "icon": "clear"
  },
  
  "801": {
    "label": "few clouds",
    "icon": "cloudy"
  },
  
  "802": {
    "label": "scattered clouds",
    "icon": "cloudy"
  },
  
  "803": {
    "label": "broken clouds",
    "icon": "cloudy"
  },
  
  "804": {
    "label": "overcast clouds",
    "icon": "cloudy"
  },
  
  
  "900": {
    "label": "tornado",
    "icon": "tornado"
  },
  
  "901": {
    "label": "tropical storm",
    "icon": "hurricane"
  },
  
  "902": {
    "label": "hurricane",
    "icon": "hurricane"
  },
  
  "903": {
    "label": "cold",
    "icon": "snowflake-cold"
  },
  
  "904": {
    "label": "hot",
    "icon": "hot"
  },
  
  "905": {
    "label": "windy",
    "icon": "windy"
  },
  
  "906": {
    "label": "hail",
    "icon": "hail"
  },
  
  "951": {
    "label": "calm",
    "icon": "clear"
  },
  
  "952": {
    "label": "light breeze",
    "icon": "cloudy-gusts"
  },
  
  "953": {
    "label": "gentle breeze",
    "icon": "cloudy-gusts"
  },
  
  "954": {
    "label": "moderate breeze",
    "icon": "cloudy-gusts"
  },
  
  "955": {
    "label": "fresh breeze",
    "icon": "cloudy-gusts"
  },
  
  "956": {
    "label": "strong breeze",
    "icon": "cloudy-gusts"
  },
  
  "957": {
    "label": "high wind, near gale",
    "icon": "cloudy-gusts"
  },
  
  "958": {
    "label": "gale",
    "icon": "cloudy-gusts"
  },
  
  "959": {
    "label": "severe gale",
    "icon": "cloudy-gusts"
  },
  
  "960": {
    "label": "storm",
    "icon": "thunderstorm"
  },
  
  "961": {
    "label": "violent storm",
    "icon": "thunderstorm"
  },
  
  "962": {
    "label": "hurricane",
    "icon": "cloudy-gusts"
  }
}
