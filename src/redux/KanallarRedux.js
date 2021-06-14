let KANALLAR = 'KANALLAR'
let kanal = [
    {
       id:1, href: 'https://www.facebook.com/campaign/landing.php?campaign_id=1635645080&extra_1=s%7Cc%7C313664978099%7Ce%7Cfacebook%20%27%7C&placement=&creative=313664978099&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D1635645080%26adgroupid%3D61402566414%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-360705453827%26loc_physical_ms%3D1028523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMIqYbAq6zm7wIVFW8YCh2ROg7UEAAYASAAEgLqw_D_BwE',
       src: 'facebook.png'
    },
    { id:2, href: 'https://www.instagram.com/?hl=ru', src: 'instagram.png' },
    { id:3, href: 'https://www.instagram.com/?hl=ru', src: 'twitter.png' },
    { id:4, href: 'https://www.wikipedia.org/', src: 'wk.png' },
]

const Kanal = (state = kanal, action) => {
    switch (action.type) {
        case KANALLAR:
            return state
        default:
            return state
    }
}

export const Kanallar=(kanal)=>({KANALLAR , kanal })

export default Kanal