const express = require("express");
const router = express.Router();

const js2xmlparser = require("js2xmlparser");
const moment = require("moment");

/**
 * It generates an standard sitemal.xml for SEO purposes
 */
router.get("/", function(req, res, next) {
    try {
        //our records to index
        const records = getRecordsFromDataSource();
        const collection = [];
        let today = moment();
        today = today.format("YYYY-MM-DD");
        //add site root url

        const rootUrl = {};
        rootUrl.loc = "https://giakesieuthitanphat.com/";
        rootUrl.lastmod = today;
        rootUrl.changefreq = "daily";
        rootUrl.priority = "1.0";
        
      
        collection.push(rootUrl);

        //add recipes urls
        for (let i = 0; i < records.length; i++) {
            const url = {};
            url.loc = records[i].url;
            url.lastmod = records[i].updated_at;
            collection.push(url);
        }
        const col = {
            "@": {
                xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
                "xmlns:image": "http://www.google.com/schemas/sitemap-image/1.1",
            },
            url: collection,
        };
        const xml = js2xmlparser.parse("urlset", col);
        res.set("Content-Type", "text/xml");
        res.status(200);
        res.send(xml);
    } catch (e) {
        next(e);
    }
});

/**
 * @return a collections to index (typically we'll get these records from our database)
 */
function getRecordsFromDataSource() {
    //these records will have our own structure, we return as they are and later we convert them to the xml standard format
    //so let's just define two records hard-coded

    const record1 = {
        url: "https://giakesieuthitanphat.com/",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record2 = {
        url: "https://giakesieuthitanphat.com/ke-sieu-thi",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record3 = {
        url: "https://giakesieuthitanphat.com/ke-kho",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record4 = {
        url: "https://giakesieuthitanphat.com/thiet-bi-sieu-thi",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record5 = {
        url: "https://giakesieuthitanphat.com/ho-tro",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record6 = {
        url: "https://giakesieuthitanphat.com/tin-tuc",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record7 = {
        url: "https://giakesieuthitanphat.com/ke-sieu-thi/ke-sieu-thi-luoi-doi",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record8 = {
        url: "https://giakesieuthitanphat.com/ke-sieu-thi/ke-sieu-thi-luoi-don",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record9 = {
        url: "https://giakesieuthitanphat.com/ke-sieu-thi/ke-sieu-thi-ton-lien-don",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record10 = {
        url: "https://giakesieuthitanphat.com/ke-sieu-thi/ke-sieu-thi-ton-lien-doi",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record11 = {
        url: "https://giakesieuthitanphat.com/ke-sieu-thi/ke-sieu-thi-ton-duc-lo-doi",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record12 = {
        url: "https://giakesieuthitanphat.com/ke-sieu-thi/ke-sieu-thi-ton-duc-lo-don",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record13 = {
        url: "https://giakesieuthitanphat.com/ke-sieu-thi/ke-gio-my-sieu-thi",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record14 = {
        url: "https://giakesieuthitanphat.com/ke-sieu-thi/ke-rau-sieu-thi",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record15 = {
        url: "https://giakesieuthitanphat.com/ke-kho/ke-trung-tai",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record16 = {
        url: "https://giakesieuthitanphat.com/ke-kho/tu-do-sieu-thi",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record17 = {
        url: "https://giakesieuthitanphat.com/thiet-bi-sieu-thi/camera-an-ninh",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record18 = {
        url: "https://giakesieuthitanphat.com/thiet-bi-sieu-thi/phan-mem-quan-ly-ban-hang",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record19 = {
        url: "https://giakesieuthitanphat.com/thiet-bi-sieu-thi/cua-tu-an-ninh",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record20 = {
        url: "https://giakesieuthitanphat.com/thiet-bi-sieu-thi/ban-thu-ngan",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record21 = {
        url: "https://giakesieuthitanphat.com/thiet-bi-sieu-thi/dau-doc-ma-vach",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record22 = {
        url: "https://giakesieuthitanphat.com/thiet-bi-sieu-thi/xe-day-hang-sieu-thi",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record23 = {
        url: "https://giakesieuthitanphat.com/tin-tuc/5-mau-ke-sieu-thi-gia-re-nhat-nam-2021",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record24 = {
        url: "https://giakesieuthitanphat.com/tin-tuc/",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record25 = {
        url: "https://giakesieuthitanphat.com/tin-tuc/huong-dan-lap-dat-ke-sieu-thi-luoi-don",
        updated_at: "2021-08-05T19:36:12+00:00",
    }; const record26 = {
        url: "https://giakesieuthitanphat.com/tin-tuc/lap-dat-ke-sieu-thi-sua-tai-phu-tho",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record27 = {
        url: "https://giakesieuthitanphat.com/tin-tuc/lap-dat-ke-sieu-thi-mien-phi-tai-hoa-binh",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record28 = {
        url: "https://giakesieuthitanphat.com/tin-tuc/ke-tap-hoa-gia-re-tai-ha-noi",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record29 = {
        url: "https://giakesieuthitanphat.com/tin-tuc/bac-giang-thi-mua-ke-sieu-thi-o-dau",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record30 = {
        url: "https://giakesieuthitanphat.com/tin-tuc/bao-gia-ke-sieu-thi-ke-tap-hoa-tai-yen-bai",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
      const record31 = {
        url: "https://giakesieuthitanphat.com/tin-tuc/ke-sieu-thi-ke-tap-hoa-ke-kho-hang-tai-tuyen-quang",
        updated_at: "2021-08-05T19:36:12+00:00",
    };
    const record32 = {
        url: "https://giakesieuthitanphat.com/tin-tuc/mua-ke-sieu-thi-tai-thai-binh",
        updated_at: "2021-08-05T19:36:12+00:00",
    };

    return [record1, record2, record3, record4,record5,record6,record7,record8, record9,record10,record11,record12,record13,record14,record15,record16,record17,record18,record19,record20,record21,record23,record24,record25,record26,record27,record28,record29,record30,record31,record32];
}

module.exports = router;