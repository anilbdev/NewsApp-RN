import {
 articles_url,country_code,category,_api_key
} from '../config/rest_config'

export async function getArticles(){
    try {
        console.log('try block>-->');
        // let articles = await fetch(`${articles_url}?country=${country_code}&category=${category}&apiKey=78c1a7855c92490180aa0352f14a7114`)
        let articles = await fetch(`${articles_url}?country=${country_code}&category=${category}&apiKey=${_api_key}`)
       
        let result = await articles.json()
        // console.log('try block articles>-->',result);
        articles = null
        return result.articles
    } catch (error) {
        console.log('error block>-->');
        throw(error)
    }
}