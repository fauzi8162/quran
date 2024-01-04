# source : Quran Kemenag Rest API | web-api.qurankemenag.net
# deploy : https://fauzi8162.github.io/quran

api surah :
 "https://web-api.qurankemenag.net/quran-surah";

api ayat :
"https://web-api.qurankemenag.net/quran-ayah"

api audio per ayat:
"https://media.qurankemenag.net/audio/Abu_Bakr_Ash-Shaatree_aac64/"

api audio full:
"https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/"

# how to use
**API SURAH**

GET : `https://web-api.qurankemenag.net/quran-surah`

RESPONSE :
```
{
  "data": [
    {
      "id": 1,
      "arabic": " الفاتحة",
      "latin": "Al-Fātiḥah ",
      "transliteration": "Al-Fatihah",
      "translation": "Pembuka",
      "num_ayah": 7,
      "page": 1,
      "location": "Makkiyah",
      "updated_at": null
    },
    {
      "id": 2,
      "arabic": " البقرة",
      "latin": "Al-Baqarah ",
      "transliteration": "Al-Baqarah",
      "translation": "Sapi",
      "num_ayah": 286,
      "page": 2,
      "location": "Madaniyah",
      "updated_at": null
    }
  ]
}
```

**API AYAH**

GET : `https://web-api.qurankemenag.net/quran-ayah?surah=108`

RESPONSE :
```
{
  "data": [
    {
      "id": 6205,
      "surah_id": 108,
      "ayah": 1,
      "page": 602,
      "quarter_hizb": 60.75,
      "juz": 30,
      "manzil": 7,
      "arabic": "اِنَّآ اَعْطَيْنٰكَ الْكَوْثَرَۗ",
      "kitabah": "اِنَّآ اَعْطَيْنٰكَ الْكَوْثَرَۗ",
      "latin": "Innā a‘ṭainākal-kauṡar(a).",
      "arabic_words": [
        "اِنَّآ",
        "اَعْطَيْنٰكَ",
        "الْكَوْثَرَۗ"
      ],
      "translation": "Sesungguhnya Kami telah memberimu (Nabi Muhammad) nikmat yang banyak.",
      "footnotes": null,
      "updated_at": null,
      "surah": {
        "id": 108,
        "arabic": " الكوثر",
        "latin": "Al-Kauṡar",
        "transliteration": "Al-Kausar",
        "translation": "Nikmat Yang Banyak",
        "num_ayah": 3,
        "page": 602,
        "location": "Makkiyah"
      }
    },
    {
      "id": 6206,
      "surah_id": 108,
      "ayah": 2,
      "page": 602,
      "quarter_hizb": 60.75,
      "juz": 30,
      "manzil": 7,
      "arabic": "فَصَلِّ لِرَبِّكَ وَانْحَرْۗ",
      "kitabah": "فَصَلِّ لِرَبِّكَ وَانْحَرْۗ",
      "latin": "Faṣalli lirabbika wanḥar.",
      "arabic_words": [
        "فَصَلِّ",
        "لِرَبِّكَ",
        "وَانْحَرْۗ"
      ],
      "translation": "Maka, laksanakanlah salat karena Tuhanmu dan berkurbanlah!",
      "footnotes": null,
      "updated_at": null,
      "surah": {
        "id": 108,
        "arabic": " الكوثر",
        "latin": "Al-Kauṡar",
        "transliteration": "Al-Kausar",
        "translation": "Nikmat Yang Banyak",
        "num_ayah": 3,
        "page": 602,
        "location": "Makkiyah"
      }
    },
    {
      "id": 6207,
      "surah_id": 108,
      "ayah": 3,
      "page": 602,
      "quarter_hizb": 60.75,
      "juz": 30,
      "manzil": 7,
      "arabic": "اِنَّ شَانِئَكَ هُوَ الْاَبْتَرُ ࣖ",
      "kitabah": "اِنَّ شَانِئَكَ هُوَ الْاَبْتَرُ ࣖ",
      "latin": "Inna syāni'aka huwal-abtar(u).",
      "arabic_words": [
        "اِنَّ",
        "شَانِئَكَ",
        "هُوَ",
        "الْاَبْتَرُ ࣖ"
      ],
      "translation": "Sesungguhnya orang yang membencimu, dialah yang terputus (dari rahmat Allah).",
      "footnotes": null,
      "updated_at": null,
      "surah": {
        "id": 108,
        "arabic": " الكوثر",
        "latin": "Al-Kauṡar",
        "transliteration": "Al-Kausar",
        "translation": "Nikmat Yang Banyak",
        "num_ayah": 3,
        "page": 602,
        "location": "Makkiyah"
      }
    }
  ]
}
```
**API AUDIO PER AYAH**

GET : `https://media.qurankemenag.net/audio/Abu_Bakr_Ash-Shaatree_aac64/001001.m4a`

RESPONSE :
```
surah 1, ayah 1
```

GET : `https://media.qurankemenag.net/audio/Abu_Bakr_Ash-Shaatree_aac64/0020025.m4a`

RESPONSE :
```
surah 2, ayah 25
```
**API AUDIO PER SURAH**

GET : `https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3`

RESPONSE :
```
surah 1 (Al-Fatihah)
```

GET : `https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/0018.mp3`

RESPONSE :
```
surah 18 (Al-Kahf)
```




