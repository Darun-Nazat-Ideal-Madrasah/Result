// ফলাফল ডাটা: প্রথম ও দ্বিতীয় সাময়িক পরীক্ষা
const students = [
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "1",
    "reg": "",
    "name": "আবিদ হোসেন",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 90
      },
      {
        "name": "আরবি লেখা",
        "marks": 100
      },
      {
        "name": "বাংলা",
        "marks": 100
      },
      {
        "name": "ইংরেজি",
        "marks": 99
      },
      {
        "name": "গণিত",
        "marks": 96
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 100
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 100
      }
    ],
    "total": 685,
    "average": 97.86,
    "point": 5,
    "grade": "A+",
    "rank": "1ম"
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "2",
    "reg": "",
    "name": "আব্দুল মোমেন",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 95
      },
      {
        "name": "আরবি লেখা",
        "marks": 99
      },
      {
        "name": "বাংলা",
        "marks": 98
      },
      {
        "name": "ইংরেজি",
        "marks": 98
      },
      {
        "name": "গণিত",
        "marks": 96
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 98
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 100
      }
    ],
    "total": 684,
    "average": 97.71,
    "point": 5,
    "grade": "A+",
    "rank": "2য়"
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "3",
    "reg": "",
    "name": "নাঈমুল ইসলাম নাবিল",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 92
      },
      {
        "name": "আরবি লেখা",
        "marks": 99
      },
      {
        "name": "বাংলা",
        "marks": 92
      },
      {
        "name": "ইংরেজি",
        "marks": 97
      },
      {
        "name": "গণিত",
        "marks": 95
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 98
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 100
      }
    ],
    "total": 673,
    "average": 96.14,
    "point": 5,
    "grade": "A+",
    "rank": 4
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "4",
    "reg": "",
    "name": "তাওসিফ তানজিদ",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 90
      },
      {
        "name": "আরবি লেখা",
        "marks": 99
      },
      {
        "name": "বাংলা",
        "marks": 97
      },
      {
        "name": "ইংরেজি",
        "marks": 99
      },
      {
        "name": "গণিত",
        "marks": 96
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 100
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 100
      }
    ],
    "total": 681,
    "average": 97.29,
    "point": 5,
    "grade": "A+",
    "rank": "3য়"
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "5",
    "reg": "",
    "name": "মুরসালিন তারেক",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 90
      },
      {
        "name": "আরবি লেখা",
        "marks": 98
      },
      {
        "name": "বাংলা",
        "marks": 96
      },
      {
        "name": "ইংরেজি",
        "marks": 93
      },
      {
        "name": "গণিত",
        "marks": 95
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 95
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 100
      }
    ],
    "total": 667,
    "average": 95.29,
    "point": 5,
    "grade": "A+",
    "rank": 5
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "6",
    "reg": "",
    "name": "রাইহান উদ্দিন",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 98
      },
      {
        "name": "আরবি লেখা",
        "marks": 99
      },
      {
        "name": "বাংলা",
        "marks": 88
      },
      {
        "name": "ইংরেজি",
        "marks": 84
      },
      {
        "name": "গণিত",
        "marks": 85
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 100
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 100
      }
    ],
    "total": 654,
    "average": 93.43,
    "point": 5,
    "grade": "A+",
    "rank": 7
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "7",
    "reg": "",
    "name": "আব্দুল্লাহ আল তাহজিব",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 80
      },
      {
        "name": "আরবি লেখা",
        "marks": 87
      },
      {
        "name": "বাংলা",
        "marks": 88
      },
      {
        "name": "ইংরেজি",
        "marks": 80
      },
      {
        "name": "গণিত",
        "marks": 76
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 90
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 99
      }
    ],
    "total": 600,
    "average": 85.71,
    "point": 4.86,
    "grade": "A",
    "rank": 12
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "8",
    "reg": "",
    "name": "সিদরাতুল মুনতাহা",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 90
      },
      {
        "name": "আরবি লেখা",
        "marks": 92
      },
      {
        "name": "বাংলা",
        "marks": 92
      },
      {
        "name": "ইংরেজি",
        "marks": 76
      },
      {
        "name": "গণিত",
        "marks": 85
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 85
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 100
      }
    ],
    "total": 620,
    "average": 88.57,
    "point": 4.86,
    "grade": "A",
    "rank": 9
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "9",
    "reg": "",
    "name": "আরিশা ইসলাম",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 85
      },
      {
        "name": "আরবি লেখা",
        "marks": 82
      },
      {
        "name": "বাংলা",
        "marks": 92
      },
      {
        "name": "ইংরেজি",
        "marks": 78
      },
      {
        "name": "গণিত",
        "marks": 76
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 88
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 98
      }
    ],
    "total": 599,
    "average": 85.57,
    "point": 4.71,
    "grade": "A",
    "rank": 13
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "10",
    "reg": "",
    "name": "মারইয়াম বিলকিস",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 90
      },
      {
        "name": "আরবি লেখা",
        "marks": 90
      },
      {
        "name": "বাংলা",
        "marks": 87
      },
      {
        "name": "ইংরেজি",
        "marks": 94
      },
      {
        "name": "গণিত",
        "marks": 90
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 98
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 90
      }
    ],
    "total": 639,
    "average": 91.29,
    "point": 5,
    "grade": "A+",
    "rank": 8
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "11",
    "reg": "",
    "name": "কারিমা ইয়াসমিন",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 85
      },
      {
        "name": "আরবি লেখা",
        "marks": 90
      },
      {
        "name": "বাংলা",
        "marks": 71
      },
      {
        "name": "ইংরেজি",
        "marks": 68
      },
      {
        "name": "গণিত",
        "marks": 84
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 90
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 90
      }
    ],
    "total": 578,
    "average": 82.57,
    "point": 4.64,
    "grade": "A",
    "rank": 15
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "12",
    "reg": "",
    "name": "ইশফাক হোসেন সাদিক",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 80
      },
      {
        "name": "আরবি লেখা",
        "marks": 99
      },
      {
        "name": "বাংলা",
        "marks": 88
      },
      {
        "name": "ইংরেজি",
        "marks": 78
      },
      {
        "name": "গণিত",
        "marks": 87
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 65
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 85
      }
    ],
    "total": 582,
    "average": 83.14,
    "point": 4.64,
    "grade": "A",
    "rank": 14
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "13",
    "reg": "",
    "name": "আদিব হোসেন",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 80
      },
      {
        "name": "আরবি লেখা",
        "marks": 90
      },
      {
        "name": "বাংলা",
        "marks": 92
      },
      {
        "name": "ইংরেজি",
        "marks": 94
      },
      {
        "name": "গণিত",
        "marks": 87
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 75
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 85
      }
    ],
    "total": 603,
    "average": 86.14,
    "point": 4.86,
    "grade": "A",
    "rank": 11
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "14",
    "reg": "",
    "name": "ওহিদুল ইসলাম",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 80
      },
      {
        "name": "আরবি লেখা",
        "marks": 85
      },
      {
        "name": "বাংলা",
        "marks": 44
      },
      {
        "name": "ইংরেজি",
        "marks": 80
      },
      {
        "name": "গণিত",
        "marks": 74
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 60
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 70
      }
    ],
    "total": 493,
    "average": 70.43,
    "point": 4.07,
    "grade": "A",
    "rank": 21
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "15",
    "reg": "",
    "name": "মুমতাহিনা মেহজাবিন",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 75
      },
      {
        "name": "আরবি লেখা",
        "marks": 87
      },
      {
        "name": "বাংলা",
        "marks": 85
      },
      {
        "name": "ইংরেজি",
        "marks": 70
      },
      {
        "name": "গণিত",
        "marks": 74
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 65
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 60
      }
    ],
    "total": 516,
    "average": 73.71,
    "point": 4.14,
    "grade": "A",
    "rank": 16
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "16",
    "reg": "",
    "name": "মারুফ হোসেন",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 70
      },
      {
        "name": "আরবি লেখা",
        "marks": 80
      },
      {
        "name": "বাংলা",
        "marks": 68
      },
      {
        "name": "ইংরেজি",
        "marks": 60
      },
      {
        "name": "গণিত",
        "marks": 78
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 80
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 75
      }
    ],
    "total": 511,
    "average": 73,
    "point": 4.14,
    "grade": "A",
    "rank": 17
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "17",
    "reg": "",
    "name": "আরিয়ান জিহান",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 65
      },
      {
        "name": "আরবি লেখা",
        "marks": 85
      },
      {
        "name": "বাংলা",
        "marks": 68
      },
      {
        "name": "ইংরেজি",
        "marks": 75
      },
      {
        "name": "গণিত",
        "marks": 79
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 60
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 78
      }
    ],
    "total": 510,
    "average": 72.86,
    "point": 3.93,
    "grade": "A-",
    "rank": 18
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "18",
    "reg": "",
    "name": "আরিয়ান আহমেদ",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 90
      },
      {
        "name": "আরবি লেখা",
        "marks": 82
      },
      {
        "name": "বাংলা",
        "marks": 72
      },
      {
        "name": "ইংরেজি",
        "marks": 60
      },
      {
        "name": "গণিত",
        "marks": 68
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 62
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 60
      }
    ],
    "total": 494,
    "average": 70.57,
    "point": 4,
    "grade": "A",
    "rank": 20
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "19",
    "reg": "",
    "name": "আব্দুল্লাহ আল মাহি",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 85
      },
      {
        "name": "আরবি লেখা",
        "marks": 75
      },
      {
        "name": "বাংলা",
        "marks": 63
      },
      {
        "name": "ইংরেজি",
        "marks": 55
      },
      {
        "name": "গণিত",
        "marks": 65
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 55
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 70
      }
    ],
    "total": 468,
    "average": 66.86,
    "point": 3.71,
    "grade": "A-",
    "rank": 22
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "20",
    "reg": "",
    "name": "আব্দুল কাদের জোহান",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 65
      },
      {
        "name": "আরবি লেখা",
        "marks": 76
      },
      {
        "name": "বাংলা",
        "marks": 80
      },
      {
        "name": "ইংরেজি",
        "marks": 66
      },
      {
        "name": "গণিত",
        "marks": 76
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 60
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 70
      }
    ],
    "total": 493,
    "average": 70.43,
    "point": 3.93,
    "grade": "A-",
    "rank": 21
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "21",
    "reg": "",
    "name": "তৌহিদুল ইসলাম",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 60
      },
      {
        "name": "আরবি লেখা",
        "marks": 75
      },
      {
        "name": "বাংলা",
        "marks": 80
      },
      {
        "name": "ইংরেজি",
        "marks": 65
      },
      {
        "name": "গণিত",
        "marks": 60
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 55
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 60
      }
    ],
    "total": 455,
    "average": 65,
    "point": 3.71,
    "grade": "A-",
    "rank": 23
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "22",
    "reg": "",
    "name": "মোকাররম হোসেন",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 90
      },
      {
        "name": "আরবি লেখা",
        "marks": 93
      },
      {
        "name": "বাংলা",
        "marks": 96
      },
      {
        "name": "ইংরেজি",
        "marks": 88
      },
      {
        "name": "গণিত",
        "marks": 96
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 65
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 85
      }
    ],
    "total": 613,
    "average": 87.57,
    "point": 4.79,
    "grade": "A",
    "rank": 10
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "23",
    "reg": "",
    "name": "সাফওয়ান আহমেদ",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 90
      },
      {
        "name": "আরবি লেখা",
        "marks": 95
      },
      {
        "name": "বাংলা",
        "marks": 96
      },
      {
        "name": "ইংরেজি",
        "marks": 97
      },
      {
        "name": "গণিত",
        "marks": 95
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 85
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 97
      }
    ],
    "total": 655,
    "average": 93.57,
    "point": 5,
    "grade": "A+",
    "rank": 6
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-প্রথম",
    "classBn": "প্রথম শ্রেণি",
    "roll": "24",
    "reg": "",
    "name": "নুরুল ইসলাম সাজ্জাদ",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 95
      },
      {
        "name": "আরবি লেখা",
        "marks": 81
      },
      {
        "name": "বাংলা",
        "marks": 50
      },
      {
        "name": "ইংরেজি",
        "marks": 77
      },
      {
        "name": "গণিত",
        "marks": 75
      },
      {
        "name": "কালিমা, মাসা ও সাদাহ: জ্ঞান",
        "marks": 60
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 60
      }
    ],
    "total": 498,
    "average": 71.14,
    "point": 4,
    "grade": "A",
    "rank": 19
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "1",
    "reg": "",
    "name": "যুবায়ের আহমদ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 90
      },
      {
        "name": "আরবি লেখা",
        "marks": 94
      },
      {
        "name": "বাংলা",
        "marks": 97
      },
      {
        "name": "ইংরেজি",
        "marks": 87
      },
      {
        "name": "গণিত",
        "marks": 92
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 95
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 95
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 95
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 95
      }
    ],
    "total": 840,
    "average": 93.33,
    "point": 5,
    "grade": "A+",
    "rank": "2য়"
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "2",
    "reg": "",
    "name": "হাসনা তাবাচ্ছুম মুসকান",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 88
      },
      {
        "name": "আরবি লেখা",
        "marks": 94
      },
      {
        "name": "বাংলা",
        "marks": 97
      },
      {
        "name": "ইংরেজি",
        "marks": 74
      },
      {
        "name": "গণিত",
        "marks": 97
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 85
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 92
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 90
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 95
      }
    ],
    "total": 812,
    "average": 90.22,
    "point": 4.89,
    "grade": "A",
    "rank": 6
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "3",
    "reg": "",
    "name": "আতকিয়া ফাইজা",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 90
      },
      {
        "name": "আরবি লেখা",
        "marks": 75
      },
      {
        "name": "বাংলা",
        "marks": 95
      },
      {
        "name": "ইংরেজি",
        "marks": 84
      },
      {
        "name": "গণিত",
        "marks": 95
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 96
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 100
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 95
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 98
      }
    ],
    "total": 828,
    "average": 92,
    "point": 4.89,
    "grade": "A",
    "rank": "3য়"
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "4",
    "reg": "",
    "name": "মোবারশিরা জান্নাত সুমাইয়া",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 80
      },
      {
        "name": "আরবি লেখা",
        "marks": 96
      },
      {
        "name": "বাংলা",
        "marks": 97
      },
      {
        "name": "ইংরেজি",
        "marks": 75
      },
      {
        "name": "গণিত",
        "marks": 100
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 92
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 100
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 87
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 90
      }
    ],
    "total": 817,
    "average": 90.78,
    "point": 4.89,
    "grade": "A",
    "rank": 5
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "5",
    "reg": "",
    "name": "আব্দুর রহমান",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 95
      },
      {
        "name": "আরবি লেখা",
        "marks": 91
      },
      {
        "name": "বাংলা",
        "marks": 97
      },
      {
        "name": "ইংরেজি",
        "marks": 95
      },
      {
        "name": "গণিত",
        "marks": 91
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 98
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 95
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 98
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 100
      }
    ],
    "total": 860,
    "average": 95.56,
    "point": 5,
    "grade": "A+",
    "rank": "1ম"
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "6",
    "reg": "",
    "name": "আরিবা সুলতানা",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 90
      },
      {
        "name": "আরবি লেখা",
        "marks": 90
      },
      {
        "name": "বাংলা",
        "marks": 97
      },
      {
        "name": "ইংরেজি",
        "marks": 87
      },
      {
        "name": "গণিত",
        "marks": 100
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 92
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 94
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 92
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 80
      }
    ],
    "total": 822,
    "average": 91.33,
    "point": 5,
    "grade": "A+",
    "rank": 4
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "7",
    "reg": "",
    "name": "সুরাইয়া জান্নাত নুহা",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 65
      },
      {
        "name": "আরবি লেখা",
        "marks": 50
      },
      {
        "name": "বাংলা",
        "marks": 58
      },
      {
        "name": "ইংরেজি",
        "marks": 65
      },
      {
        "name": "গণিত",
        "marks": 90
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 80
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 70
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 60
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 65
      }
    ],
    "total": 603,
    "average": 67,
    "point": 3.78,
    "grade": "A-",
    "rank": 16
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "8",
    "reg": "",
    "name": "জান্নাতুল আলীয়া",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 85
      },
      {
        "name": "আরবি লেখা",
        "marks": 87
      },
      {
        "name": "বাংলা",
        "marks": 96
      },
      {
        "name": "ইংরেজি",
        "marks": 76
      },
      {
        "name": "গণিত",
        "marks": 100
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 85
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 92
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 90
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 75
      }
    ],
    "total": 786,
    "average": 87.33,
    "point": 4.78,
    "grade": "A",
    "rank": 8
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "9",
    "reg": "",
    "name": "হুমায়রা আফরা",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 85
      },
      {
        "name": "আরবি লেখা",
        "marks": 76
      },
      {
        "name": "বাংলা",
        "marks": 93
      },
      {
        "name": "ইংরেজি",
        "marks": 75
      },
      {
        "name": "গণিত",
        "marks": 95
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 92
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 97
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 85
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 100
      }
    ],
    "total": 798,
    "average": 88.67,
    "point": 4.78,
    "grade": "A",
    "rank": 7
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "10",
    "reg": "",
    "name": "ছামিরুল ইসলাম",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 80
      },
      {
        "name": "আরবি লেখা",
        "marks": 60
      },
      {
        "name": "বাংলা",
        "marks": 78
      },
      {
        "name": "ইংরেজি",
        "marks": 65
      },
      {
        "name": "গণিত",
        "marks": 96
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 80
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 90
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 88
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 80
      }
    ],
    "total": 717,
    "average": 79.67,
    "point": 4.56,
    "grade": "A",
    "rank": 11
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "11",
    "reg": "",
    "name": "ফাতেমাতুল জান্নাত",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 75
      },
      {
        "name": "আরবি লেখা",
        "marks": 71
      },
      {
        "name": "বাংলা",
        "marks": 70
      },
      {
        "name": "ইংরেজি",
        "marks": 65
      },
      {
        "name": "গণিত",
        "marks": 91
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 80
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 90
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 85
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 80
      }
    ],
    "total": 707,
    "average": 78.56,
    "point": 4.5,
    "grade": "A",
    "rank": 12
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "12",
    "reg": "",
    "name": "আয়মান জারিফ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 80
      },
      {
        "name": "আরবি লেখা",
        "marks": 78
      },
      {
        "name": "বাংলা",
        "marks": 90
      },
      {
        "name": "ইংরেজি",
        "marks": 72
      },
      {
        "name": "গণিত",
        "marks": 94
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 96
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 70
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 90
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 65
      }
    ],
    "total": 735,
    "average": 81.67,
    "point": 4.5,
    "grade": "A",
    "rank": 10
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "13",
    "reg": "",
    "name": "জোবায়েদ হো: তাহির",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 70
      },
      {
        "name": "আরবি লেখা",
        "marks": 50
      },
      {
        "name": "বাংলা",
        "marks": 70
      },
      {
        "name": "ইংরেজি",
        "marks": 65
      },
      {
        "name": "গণিত",
        "marks": 91
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 92
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 85
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 85
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 85
      }
    ],
    "total": 693,
    "average": 77,
    "point": 4.39,
    "grade": "A",
    "rank": 13
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "14",
    "reg": "",
    "name": "বিবি মরিয়ম",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 65
      },
      {
        "name": "আরবি লেখা",
        "marks": 50
      },
      {
        "name": "বাংলা",
        "marks": 86
      },
      {
        "name": "ইংরেজি",
        "marks": 65
      },
      {
        "name": "গণিত",
        "marks": 95
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 80
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 70
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 70
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 65
      }
    ],
    "total": 646,
    "average": 71.78,
    "point": 4.06,
    "grade": "A",
    "rank": 15
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "15",
    "reg": "",
    "name": "আবরার আহমদ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 85
      },
      {
        "name": "আরবি লেখা",
        "marks": 45
      },
      {
        "name": "বাংলা",
        "marks": 84
      },
      {
        "name": "ইংরেজি",
        "marks": 68
      },
      {
        "name": "গণিত",
        "marks": 92
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 92
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 98
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 85
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 90
      }
    ],
    "total": 739,
    "average": 82.11,
    "point": 4.5,
    "grade": "A",
    "rank": 9
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "16",
    "reg": "",
    "name": "সাফওয়ান সাদিদ",
    "subjects": [],
    "total": "অনুপস্থিত",
    "average": "অনুপস্থিত",
    "point": "অনুপস্থিত",
    "grade": "অনুপস্থিত",
    "rank": "অনুপস্থিত"
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "17",
    "reg": "",
    "name": "কলি আক্তার",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 65
      },
      {
        "name": "আরবি লেখা",
        "marks": 60
      },
      {
        "name": "বাংলা",
        "marks": 93
      },
      {
        "name": "ইংরেজি",
        "marks": 65
      },
      {
        "name": "গণিত",
        "marks": 92
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 70
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 80
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 60
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 65
      }
    ],
    "total": 650,
    "average": 72.22,
    "point": 4.06,
    "grade": "A",
    "rank": 14
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-দ্বিতীয়",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "18",
    "reg": "",
    "name": "নাহিদ হাসান",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 60
      },
      {
        "name": "আরবি লেখা",
        "marks": 35
      },
      {
        "name": "বাংলা",
        "marks": 40
      },
      {
        "name": "ইংরেজি",
        "marks": 50
      },
      {
        "name": "গণিত",
        "marks": 59
      },
      {
        "name": "পরি: পরি ও সাঃ জ্ঞান",
        "marks": 60
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 75
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 60
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 65
      }
    ],
    "total": 504,
    "average": 56,
    "point": 3,
    "grade": "B",
    "rank": 17
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-তৃতীয়",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "1",
    "reg": "",
    "name": "মারইয়াম সুলতান",
    "subjects": [
      {
        "name": "কুরআন মা: ও তাজবীদ",
        "marks": 100
      },
      {
        "name": "আরবি লেখা",
        "marks": 98
      },
      {
        "name": "বাংলা",
        "marks": 97
      },
      {
        "name": "ইংরেজি",
        "marks": 90
      },
      {
        "name": "গণিত",
        "marks": 96.5
      },
      {
        "name": "সমাজ, বিজ্ঞান ও সাধারণ জ্ঞান",
        "marks": 96
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 100
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 98
      },
      {
        "name": "হাদিস ও আস: হুসনা",
        "marks": 99
      }
    ],
    "total": 874.5,
    "average": 97.17,
    "point": 5,
    "grade": "A+",
    "rank": "1ম"
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-তৃতীয়",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "2",
    "reg": "",
    "name": "নাজিফা হোসাইন",
    "subjects": [
      {
        "name": "কুরআন মা: ও তাজবীদ",
        "marks": 90
      },
      {
        "name": "আরবি লেখা",
        "marks": 95
      },
      {
        "name": "বাংলা",
        "marks": 98
      },
      {
        "name": "ইংরেজি",
        "marks": 96
      },
      {
        "name": "গণিত",
        "marks": 97
      },
      {
        "name": "সমাজ, বিজ্ঞান ও সাধারণ জ্ঞান",
        "marks": 99
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 99
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 95
      },
      {
        "name": "হাদিস ও আস: হুসনা",
        "marks": 95
      }
    ],
    "total": 864,
    "average": 96,
    "point": 5,
    "grade": "A+",
    "rank": "2য়"
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-তৃতীয়",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "3",
    "reg": "",
    "name": "তৌফিকুল ইসলাম",
    "subjects": [
      {
        "name": "কুরআন মা: ও তাজবীদ",
        "marks": 85
      },
      {
        "name": "আরবি লেখা",
        "marks": 90
      },
      {
        "name": "বাংলা",
        "marks": 94
      },
      {
        "name": "ইংরেজি",
        "marks": 77
      },
      {
        "name": "গণিত",
        "marks": 63.5
      },
      {
        "name": "সমাজ, বিজ্ঞান ও সাধারণ জ্ঞান",
        "marks": 71
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 97
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 85
      },
      {
        "name": "হাদিস ও আস: হুসনা",
        "marks": 90
      }
    ],
    "total": 752.5,
    "average": 83.61,
    "point": 4.61,
    "grade": "A",
    "rank": "3য়"
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-তৃতীয়",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "4",
    "reg": "",
    "name": "মনিরুল ইসলাম",
    "subjects": [
      {
        "name": "কুরআন মা: ও তাজবীদ",
        "marks": 70
      },
      {
        "name": "আরবি লেখা",
        "marks": 70
      },
      {
        "name": "বাংলা",
        "marks": 75
      },
      {
        "name": "ইংরেজি",
        "marks": 80
      },
      {
        "name": "গণিত",
        "marks": 54
      },
      {
        "name": "সমাজ, বিজ্ঞান ও সাধারণ জ্ঞান",
        "marks": 80
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 95
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 80
      },
      {
        "name": "হাদিস ও আস: হুসনা",
        "marks": 85
      }
    ],
    "total": 689,
    "average": 76.56,
    "point": 4.44,
    "grade": "A",
    "rank": 4
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-তৃতীয়",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "5",
    "reg": "",
    "name": "ইসমাত মাকছুরাহ",
    "subjects": [
      {
        "name": "কুরআন মা: ও তাজবীদ",
        "marks": 75
      },
      {
        "name": "আরবি লেখা",
        "marks": 80
      },
      {
        "name": "বাংলা",
        "marks": 87
      },
      {
        "name": "ইংরেজি",
        "marks": 74
      },
      {
        "name": "গণিত",
        "marks": 65
      },
      {
        "name": "সমাজ, বিজ্ঞান ও সাধারণ জ্ঞান",
        "marks": 54
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 90
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 80
      },
      {
        "name": "হাদিস ও আস: হুসনা",
        "marks": 80
      }
    ],
    "total": 685,
    "average": 76.11,
    "point": 4.39,
    "grade": "A",
    "rank": 5
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-তৃতীয়",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "6",
    "reg": "",
    "name": "আবির হোসেন",
    "subjects": [
      {
        "name": "কুরআন মা: ও তাজবীদ",
        "marks": 65
      },
      {
        "name": "আরবি লেখা",
        "marks": 65
      },
      {
        "name": "বাংলা",
        "marks": 60
      },
      {
        "name": "ইংরেজি",
        "marks": 60
      },
      {
        "name": "গণিত",
        "marks": 50
      },
      {
        "name": "সমাজ, বিজ্ঞান ও সাধারণ জ্ঞান",
        "marks": 52
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 80
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 75
      },
      {
        "name": "হাদিস ও আস: হুসনা",
        "marks": 70
      }
    ],
    "total": 577,
    "average": 64.11,
    "point": 3.67,
    "grade": "A-",
    "rank": 7
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-তৃতীয়",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "7",
    "reg": "",
    "name": "উম্মে হাফসা",
    "subjects": [
      {
        "name": "কুরআন মা: ও তাজবীদ",
        "marks": 70
      },
      {
        "name": "আরবি লেখা",
        "marks": 65
      },
      {
        "name": "বাংলা",
        "marks": 72
      },
      {
        "name": "ইংরেজি",
        "marks": 50
      },
      {
        "name": "গণিত",
        "marks": 69.5
      },
      {
        "name": "সমাজ, বিজ্ঞান ও সাধারণ জ্ঞান",
        "marks": 62
      },
      {
        "name": "কালিমা ও মাসায়িল",
        "marks": 75
      },
      {
        "name": "আদঃসালাত ও মাসনূনাহ",
        "marks": 78
      },
      {
        "name": "হাদিস ও আস: হুসনা",
        "marks": 78
      }
    ],
    "total": 619.5,
    "average": 68.83,
    "point": 3.72,
    "grade": "A-",
    "rank": 6
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-চতুর্থ",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "1",
    "reg": "",
    "name": "সাবরিনা তাওসিন",
    "subjects": [
      {
        "name": "ইকরনা দারসান",
        "marks": 94
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 78
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 68
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 56
      },
      {
        "name": "উর্দু কায়েদা",
        "marks": 70
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 90
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 67
      },
      {
        "name": "গণিত",
        "marks": 85
      }
    ],
    "total": 608,
    "average": 76,
    "point": 4.13,
    "grade": "A",
    "rank": "3য়"
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-চতুর্থ",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "2",
    "reg": "",
    "name": "তাসফিয়া জাহান",
    "subjects": [
      {
        "name": "ইকরনা দারসান",
        "marks": 92
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 88
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 58
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 61
      },
      {
        "name": "উর্দু কায়েদা",
        "marks": 98
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 94
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 80
      },
      {
        "name": "গণিত",
        "marks": 90
      }
    ],
    "total": 661,
    "average": 82.63,
    "point": 4.56,
    "grade": "A",
    "rank": "1ম"
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-চতুর্থ",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "3",
    "reg": "",
    "name": "ফাওজিয়া তাবাসসুম",
    "subjects": [
      {
        "name": "ইকরনা দারসান",
        "marks": 64
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 75
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 47
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 50
      },
      {
        "name": "উর্দু কায়েদা",
        "marks": 76
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 70
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 43
      },
      {
        "name": "গণিত",
        "marks": 75
      }
    ],
    "total": 500,
    "average": 62.5,
    "point": 3.31,
    "grade": "B",
    "rank": 6
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-চতুর্থ",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "4",
    "reg": "",
    "name": "জান্নাতুল ফেরদৌস",
    "subjects": [
      {
        "name": "ইকরনা দারসান",
        "marks": 75
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 94
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 46
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 46
      },
      {
        "name": "উর্দু কায়েদা",
        "marks": 92
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 80
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 80
      },
      {
        "name": "গণিত",
        "marks": 74
      }
    ],
    "total": 587,
    "average": 73.38,
    "point": 4,
    "grade": "A",
    "rank": 4
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-চতুর্থ",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "5",
    "reg": "",
    "name": "উম্মে আয়মান",
    "subjects": [
      {
        "name": "ইকরনা দারসান",
        "marks": 92
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 92
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 76
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 57
      },
      {
        "name": "উর্দু কায়েদা",
        "marks": 77
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 75
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 82
      },
      {
        "name": "গণিত",
        "marks": 60
      }
    ],
    "total": 611,
    "average": 76.38,
    "point": 4.19,
    "grade": "A",
    "rank": "2য়"
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-চতুর্থ",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "6",
    "reg": "",
    "name": "ইসরাত জাহান",
    "subjects": [
      {
        "name": "ইকরনা দারসান",
        "marks": 57
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 57
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 35
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 53
      },
      {
        "name": "উর্দু কায়েদা",
        "marks": 40
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 60
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 35
      },
      {
        "name": "গণিত",
        "marks": 38
      }
    ],
    "total": 375,
    "average": 46.88,
    "point": 2.19,
    "grade": "C",
    "rank": 8
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-চতুর্থ",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "7",
    "reg": "",
    "name": "সাদিয়া আক্তার",
    "subjects": [
      {
        "name": "ইকরনা দারসান",
        "marks": 99
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 90
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 49
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 35
      },
      {
        "name": "উর্দু কায়েদা",
        "marks": 86
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 88
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 76
      },
      {
        "name": "গণিত",
        "marks": 46
      }
    ],
    "total": 569,
    "average": 71.13,
    "point": 3.63,
    "grade": "A-",
    "rank": 5
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-চতুর্থ",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "8",
    "reg": "",
    "name": "আফরিন সুলতানা",
    "subjects": [
      {
        "name": "ইকরনা দারসান",
        "marks": 34
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 33
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 33
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 39
      },
      {
        "name": "উর্দু কায়েদা",
        "marks": 63
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 50
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 33
      },
      {
        "name": "গণিত",
        "marks": 33
      }
    ],
    "total": 318,
    "average": 39.75,
    "point": 1.56,
    "grade": "D",
    "rank": 10
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-চতুর্থ",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "9",
    "reg": "",
    "name": "মরিয়ম মাহাবুল",
    "subjects": [
      {
        "name": "ইকরনা দারসান",
        "marks": 54
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 35
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 33
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 37
      },
      {
        "name": "উর্দু কায়েদা",
        "marks": 33
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 50
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 33
      },
      {
        "name": "গণিত",
        "marks": 33
      }
    ],
    "total": 308,
    "average": 38.5,
    "point": 1.5,
    "grade": "D",
    "rank": 11
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-চতুর্থ",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "10",
    "reg": "",
    "name": "মরিয়ম কামরুল",
    "subjects": [
      {
        "name": "ইকরনা দারসান",
        "marks": 64
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 70
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 33
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 41
      },
      {
        "name": "উর্দু কায়েদা",
        "marks": 41
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 50
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 33
      },
      {
        "name": "গণিত",
        "marks": 36
      }
    ],
    "total": 368,
    "average": 46,
    "point": 2.19,
    "grade": "C",
    "rank": 9
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-চতুর্থ",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "11",
    "reg": "",
    "name": "তাসলিমা মীম",
    "subjects": [
      {
        "name": "ইকরনা দারসান",
        "marks": 68
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 85
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 38
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 46
      },
      {
        "name": "উর্দু কায়েদা",
        "marks": 61
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 76
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 40
      },
      {
        "name": "গণিত",
        "marks": 33
      }
    ],
    "total": 447,
    "average": 55.88,
    "point": 2.75,
    "grade": "C",
    "rank": 7
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-পঞ্চম",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "1",
    "reg": "",
    "name": "মিশকাতুল জান্নাত মাইমুনা",
    "subjects": [
      {
        "name": "এসো আরবি শিখি",
        "marks": 85
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 72
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 61
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 70
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 70
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 61
      },
      {
        "name": "গণিত",
        "marks": 75
      }
    ],
    "total": 494,
    "average": 70.57,
    "point": 4,
    "grade": "A",
    "rank": "2য়"
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-পঞ্চম",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "2",
    "reg": "",
    "name": "মিফতাহুল মাহিরা",
    "subjects": [
      {
        "name": "এসো আরবি শিখি",
        "marks": 87
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 64
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 34
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 63
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 67
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 45
      },
      {
        "name": "গণিত",
        "marks": 79
      }
    ],
    "total": 439,
    "average": 62.71,
    "point": 3.21,
    "grade": "B",
    "rank": "3য়"
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-পঞ্চম",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "3",
    "reg": "",
    "name": "রাইসা আক্তার",
    "subjects": [
      {
        "name": "এসো আরবি শিখি",
        "marks": 35
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 36
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 40
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 54
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 65
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 41
      },
      {
        "name": "গণিত",
        "marks": 78
      }
    ],
    "total": 349,
    "average": 49.86,
    "point": 2.36,
    "grade": "C",
    "rank": 5
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-পঞ্চম",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "4",
    "reg": "",
    "name": "সুমাইয়া আক্তার",
    "subjects": [
      {
        "name": "এসো আরবি শিখি",
        "marks": 45
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 62
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 36
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 33
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 75
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 43
      },
      {
        "name": "গণিত",
        "marks": 71
      }
    ],
    "total": 365,
    "average": 52.14,
    "point": 2.5,
    "grade": "C",
    "rank": 4
  },
  {
    "exam": "First Term Exam",
    "examBn": "প্রথম সাময়িক পরীক্ষা",
    "className": "শ্রেণি-পঞ্চম",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "5",
    "reg": "",
    "name": "মাইমুনা জান্নাত নাইমা",
    "subjects": [
      {
        "name": "এসো আরবি শিখি",
        "marks": 99
      },
      {
        "name": "তালিমুল ইসলাম",
        "marks": 98
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 98
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 100
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 85
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 75
      },
      {
        "name": "গণিত",
        "marks": 78
      }
    ],
    "total": 633,
    "average": 90.43,
    "point": 4.71,
    "grade": "A",
    "rank": "1ম"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "1",
    "reg": "",
    "name": "আবিদ হোসাইন",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 100
      },
      {
        "name": "আরবী লিখা",
        "marks": 100
      },
      {
        "name": "বাংলা",
        "marks": 100
      },
      {
        "name": "ইংরেজী",
        "marks": 100
      },
      {
        "name": "গণিত",
        "marks": 88
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 100
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 100
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 100
      }
    ],
    "total": 788,
    "average": 98.5,
    "point": 5,
    "grade": "A+",
    "rank": "২য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "2",
    "reg": "",
    "name": "আব্দুল মোনেম",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 99
      },
      {
        "name": "আরবী লিখা",
        "marks": 100
      },
      {
        "name": "বাংলা",
        "marks": 98
      },
      {
        "name": "ইংরেজী",
        "marks": 100
      },
      {
        "name": "গণিত",
        "marks": 99
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 100
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 100
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 100
      }
    ],
    "total": 796,
    "average": 99.5,
    "point": 5,
    "grade": "A+",
    "rank": "১ম"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "3",
    "reg": "",
    "name": "নাঈমুল ইসলাম নাবিল",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 98
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 88
      },
      {
        "name": "ইংরেজী",
        "marks": 98
      },
      {
        "name": "গণিত",
        "marks": 98
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 95
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 90
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 97
      }
    ],
    "total": 761,
    "average": 95.13,
    "point": 5,
    "grade": "A+",
    "rank": 4
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "4",
    "reg": "",
    "name": "তাওসিফ তানজিদ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 90
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 97
      },
      {
        "name": "ইংরেজী",
        "marks": 99
      },
      {
        "name": "গণিত",
        "marks": 98
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 95
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 95
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 100
      }
    ],
    "total": 771,
    "average": 96.38,
    "point": 5,
    "grade": "A+",
    "rank": "৩য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "5",
    "reg": "",
    "name": "মুরসালিন তায়েফ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 95
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 93
      },
      {
        "name": "ইংরেজী",
        "marks": 98
      },
      {
        "name": "গণিত",
        "marks": 98
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 90
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 85
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 95
      }
    ],
    "total": 751,
    "average": 93.88,
    "point": 5,
    "grade": "A+",
    "rank": 5
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "6",
    "reg": "",
    "name": "রাইয়ান উদ্দিন",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 95
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 94
      },
      {
        "name": "ইংরেজী",
        "marks": 92
      },
      {
        "name": "গণিত",
        "marks": 59
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 95
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 98
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 100
      }
    ],
    "total": 730,
    "average": 91.25,
    "point": 4.75,
    "grade": "A",
    "rank": 6
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "7",
    "reg": "",
    "name": "আব্দুলস্নাহ আল তাহজিব",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 90
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 87
      },
      {
        "name": "ইংরেজী",
        "marks": 69
      },
      {
        "name": "গণিত",
        "marks": 70
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 90
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 95
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 95
      }
    ],
    "total": 693,
    "average": 86.63,
    "point": 4.69,
    "grade": "A",
    "rank": 9
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "8",
    "reg": "",
    "name": "সিদরাতুল মুনতাহা",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 75
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 81
      },
      {
        "name": "ইংরেজী",
        "marks": 79
      },
      {
        "name": "গণিত",
        "marks": 94
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 80
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 75
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 90
      }
    ],
    "total": 671,
    "average": 83.88,
    "point": 4.63,
    "grade": "A",
    "rank": 11
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "9",
    "reg": "",
    "name": "আরিশা ইসলাম",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 95
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 87
      },
      {
        "name": "ইংরেজী",
        "marks": 92
      },
      {
        "name": "গণিত",
        "marks": 98
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 85
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 80
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 95
      }
    ],
    "total": 729,
    "average": 91.13,
    "point": 5,
    "grade": "A+",
    "rank": 7
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "10",
    "reg": "",
    "name": "মারইয়াম বিলকিস",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 90
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 96
      },
      {
        "name": "ইংরেজী",
        "marks": 87
      },
      {
        "name": "গণিত",
        "marks": 86
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 83
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 75
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 85
      }
    ],
    "total": 699,
    "average": 87.38,
    "point": 4.88,
    "grade": "A",
    "rank": 8
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "11",
    "reg": "",
    "name": "কারিমা ইয়াসমিন",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 70
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 70
      },
      {
        "name": "ইংরেজী",
        "marks": 48
      },
      {
        "name": "গণিত",
        "marks": 76
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 75
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 77
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 80
      }
    ],
    "total": 593,
    "average": 74.13,
    "point": 4,
    "grade": "A",
    "rank": 13
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "12",
    "reg": "",
    "name": "ইসফার হোসেন সাদিক",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 80
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 81
      },
      {
        "name": "ইংরেজী",
        "marks": 94
      },
      {
        "name": "গণিত",
        "marks": 75
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 70
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 78
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 75
      }
    ],
    "total": 650,
    "average": 81.25,
    "point": 4.5,
    "grade": "A",
    "rank": 12
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "13",
    "reg": "",
    "name": "আদিব হোসেন",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 70
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 70
      },
      {
        "name": "ইংরেজী",
        "marks": 78
      },
      {
        "name": "গণিত",
        "marks": 67
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 60
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 70
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 60
      }
    ],
    "total": 572,
    "average": 71.5,
    "point": 3.94,
    "grade": "A-",
    "rank": 15
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "14",
    "reg": "",
    "name": "ওহিদুল ইসলাম",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 65
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 65
      },
      {
        "name": "ইংরেজী",
        "marks": 82
      },
      {
        "name": "গণিত",
        "marks": 40
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 60
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 60
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 65
      }
    ],
    "total": 534,
    "average": 66.75,
    "point": 3.69,
    "grade": "A-",
    "rank": 18
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "15",
    "reg": "",
    "name": "মুমতাহিনা মেহজাবিন",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 65
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 65
      },
      {
        "name": "ইংরেজী",
        "marks": 75
      },
      {
        "name": "গণিত",
        "marks": 90
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 60
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 60
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 50
      }
    ],
    "total": 562,
    "average": 70.25,
    "point": 3.88,
    "grade": "A-",
    "rank": 17
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "16",
    "reg": "",
    "name": "মারম্নফ হোসেন",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 70
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 75
      },
      {
        "name": "ইংরেজী",
        "marks": 62
      },
      {
        "name": "গণিত",
        "marks": 74
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 60
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 65
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 65
      }
    ],
    "total": 568,
    "average": 71,
    "point": 3.88,
    "grade": "A-",
    "rank": 16
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "17",
    "reg": "",
    "name": "আরিয়ান জিহান",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 70
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 62
      },
      {
        "name": "ইংরেজী",
        "marks": 66
      },
      {
        "name": "গণিত",
        "marks": 44
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 55
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 60
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 50
      }
    ],
    "total": 504,
    "average": 63,
    "point": 3.44,
    "grade": "B",
    "rank": 20
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "18",
    "reg": "",
    "name": "আরিয়ান আহমেদ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 60
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 0
      },
      {
        "name": "ইংরেজী",
        "marks": 58
      },
      {
        "name": "গণিত",
        "marks": 33
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 50
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 55
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 45
      }
    ],
    "total": 398,
    "average": 49.75,
    "point": 2.56,
    "grade": "C",
    "rank": 22
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "19",
    "reg": "",
    "name": "আব্দুলস্নাহ আল মাহিম",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 70
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 84
      },
      {
        "name": "ইংরেজী",
        "marks": 79
      },
      {
        "name": "গণিত",
        "marks": 33
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 60
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 70
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 80
      }
    ],
    "total": 573,
    "average": 71.63,
    "point": 3.94,
    "grade": "A-",
    "rank": 14
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "20",
    "reg": "",
    "name": "আব্দুল কাদের জোহান",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 60
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 40
      },
      {
        "name": "ইংরেজী",
        "marks": 40
      },
      {
        "name": "গণিত",
        "marks": 39
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 55
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 65
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 65
      }
    ],
    "total": 461,
    "average": 57.63,
    "point": 2.94,
    "grade": "C",
    "rank": 21
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "21",
    "reg": "",
    "name": "তৌহিদুল ইসলাম",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 50
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 38
      },
      {
        "name": "ইংরেজী",
        "marks": 40
      },
      {
        "name": "গণিত",
        "marks": 33
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 50
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 50
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 40
      }
    ],
    "total": 398,
    "average": 49.75,
    "point": 2.5,
    "grade": "C",
    "rank": 22
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "22",
    "reg": "",
    "name": "মোকাররম হোসেন",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 70
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 85
      },
      {
        "name": "ইংরেজী",
        "marks": 90
      },
      {
        "name": "গণিত",
        "marks": 77
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 90
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 88
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 90
      }
    ],
    "total": 687,
    "average": 85.88,
    "point": 4.75,
    "grade": "A",
    "rank": 10
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "23",
    "reg": "",
    "name": "সাফরীন আহমেদ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 95
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 98
      },
      {
        "name": "ইংরেজী",
        "marks": 100
      },
      {
        "name": "গণিত",
        "marks": 98
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 100
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 100
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 100
      }
    ],
    "total": 788,
    "average": 98.5,
    "point": 5,
    "grade": "A+",
    "rank": "২য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "24",
    "reg": "",
    "name": "নুরম্নল ইসলাম সাজ্জাদ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 70
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 60
      },
      {
        "name": "ইংরেজী",
        "marks": 65
      },
      {
        "name": "গণিত",
        "marks": 64
      },
      {
        "name": "কালিমা, মাসা: ও সাধা: জ্ঞান",
        "marks": 50
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 55
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 50
      }
    ],
    "total": 511,
    "average": 63.88,
    "point": 3.56,
    "grade": "A-",
    "rank": 19
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "80-100",
    "reg": "",
    "name": "অ+",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 5
      }
    ],
    "total": null,
    "average": 5.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "70-79",
    "reg": "",
    "name": "অ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 4
      }
    ],
    "total": null,
    "average": 4.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "60-79",
    "reg": "",
    "name": "অ-",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 3.5
      }
    ],
    "total": null,
    "average": 3.5,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "50-79",
    "reg": "",
    "name": "ই",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 3
      }
    ],
    "total": null,
    "average": 3.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "40-79",
    "reg": "",
    "name": "ঈ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 2
      }
    ],
    "total": null,
    "average": 2.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "33-79",
    "reg": "",
    "name": "উ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 1
      }
    ],
    "total": null,
    "average": 1.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-1",
    "classBn": "প্রথম শ্রেণি",
    "roll": "0-32",
    "reg": "",
    "name": "ঋ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 0
      }
    ],
    "total": null,
    "average": 0.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "1",
    "reg": "",
    "name": "যুবায়ের আহমদ",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 98
      },
      {
        "name": "আরবী লিখা",
        "marks": 98
      },
      {
        "name": "বাংলা",
        "marks": 98
      },
      {
        "name": "ইংরেজী",
        "marks": 99
      },
      {
        "name": "গণিত",
        "marks": 70
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 98
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 100
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 98
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 100
      }
    ],
    "total": 859,
    "average": 95.44,
    "point": 4.89,
    "grade": "A",
    "rank": "২য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "2",
    "reg": "",
    "name": "হাসনা তাবাচ্ছুম",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 94
      },
      {
        "name": "আরবী লিখা",
        "marks": 95
      },
      {
        "name": "বাংলা",
        "marks": 97
      },
      {
        "name": "ইংরেজী",
        "marks": 97
      },
      {
        "name": "গণিত",
        "marks": 94
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 97
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 100
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 100
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 98
      }
    ],
    "total": 872,
    "average": 96.89,
    "point": 5,
    "grade": "A+",
    "rank": "১ম"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "3",
    "reg": "",
    "name": "আতকিয়া ফাইজাহ",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 99
      },
      {
        "name": "আরবী লিখা",
        "marks": 90
      },
      {
        "name": "বাংলা",
        "marks": 95
      },
      {
        "name": "ইংরেজী",
        "marks": 90
      },
      {
        "name": "গণিত",
        "marks": 85
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 95
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 100
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 100
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 95
      }
    ],
    "total": 849,
    "average": 94.33,
    "point": 5,
    "grade": "A+",
    "rank": "৩য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "4",
    "reg": "",
    "name": "মোবাশি^রা জান্নাত",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 90
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 98
      },
      {
        "name": "ইংরেজী",
        "marks": 100
      },
      {
        "name": "গণিত",
        "marks": 86
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 90
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 98
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 95
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 95
      }
    ],
    "total": 849,
    "average": 94.33,
    "point": 5,
    "grade": "A+",
    "rank": "৩য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "5",
    "reg": "",
    "name": "আব্দুর রহমান",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 100
      },
      {
        "name": "আরবী লিখা",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 96
      },
      {
        "name": "ইংরেজী",
        "marks": 99
      },
      {
        "name": "গণিত",
        "marks": 90
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 100
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 100
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 100
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 90
      }
    ],
    "total": 872,
    "average": 96.89,
    "point": 5,
    "grade": "A+",
    "rank": "১ম"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "6",
    "reg": "",
    "name": "আরিবা সুলতানা",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 99
      },
      {
        "name": "আরবী লিখা",
        "marks": 95
      },
      {
        "name": "বাংলা",
        "marks": 96
      },
      {
        "name": "ইংরেজী",
        "marks": 100
      },
      {
        "name": "গণিত",
        "marks": 90
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 92
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 95
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 90
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 80
      }
    ],
    "total": 837,
    "average": 93,
    "point": 5,
    "grade": "A+",
    "rank": 4
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "7",
    "reg": "",
    "name": "সুরাইয়া জান্নাত",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 70
      },
      {
        "name": "আরবী লিখা",
        "marks": 75
      },
      {
        "name": "বাংলা",
        "marks": 75
      },
      {
        "name": "ইংরেজী",
        "marks": 66
      },
      {
        "name": "গণিত",
        "marks": 72
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 70
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 80
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 60
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 50
      }
    ],
    "total": 618,
    "average": 68.67,
    "point": 3.89,
    "grade": "A-",
    "rank": 13
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "8",
    "reg": "",
    "name": "জান্নাতুল আলীয়া",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 98
      },
      {
        "name": "আরবী লিখা",
        "marks": 85
      },
      {
        "name": "বাংলা",
        "marks": 97
      },
      {
        "name": "ইংরেজী",
        "marks": 94
      },
      {
        "name": "গণিত",
        "marks": 78
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 85
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 95
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 90
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 75
      }
    ],
    "total": 797,
    "average": 88.56,
    "point": 4.78,
    "grade": "A",
    "rank": 5
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "9",
    "reg": "",
    "name": "হুমায়রা আফরা",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 99
      },
      {
        "name": "আরবী লিখা",
        "marks": 92
      },
      {
        "name": "বাংলা",
        "marks": 95
      },
      {
        "name": "ইংরেজী",
        "marks": 84
      },
      {
        "name": "গণিত",
        "marks": 82
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 90
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 90
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 85
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 70
      }
    ],
    "total": 787,
    "average": 87.44,
    "point": 4.89,
    "grade": "A",
    "rank": 6
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "10",
    "reg": "",
    "name": "সামিরম্নল ইসলাম",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 80
      },
      {
        "name": "আরবী লিখা",
        "marks": 70
      },
      {
        "name": "বাংলা",
        "marks": 75
      },
      {
        "name": "ইংরেজী",
        "marks": 72
      },
      {
        "name": "গণিত",
        "marks": 69
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 78
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 85
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 85
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 60
      }
    ],
    "total": 674,
    "average": 74.89,
    "point": 4.22,
    "grade": "A",
    "rank": 11
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "11",
    "reg": "",
    "name": "ফাতেমাতুল জান্নাত",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 80
      },
      {
        "name": "আরবী লিখা",
        "marks": 60
      },
      {
        "name": "বাংলা",
        "marks": 80
      },
      {
        "name": "ইংরেজী",
        "marks": 78
      },
      {
        "name": "গণিত",
        "marks": 80
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 80
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 90
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 95
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 85
      }
    ],
    "total": 728,
    "average": 80.89,
    "point": 4.72,
    "grade": "A",
    "rank": 9
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "12",
    "reg": "",
    "name": "আয়মান জারিফ",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 95
      },
      {
        "name": "আরবী লিখা",
        "marks": 82
      },
      {
        "name": "বাংলা",
        "marks": 95
      },
      {
        "name": "ইংরেজী",
        "marks": 92
      },
      {
        "name": "গণিত",
        "marks": 81
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 93
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 85
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 80
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 75
      }
    ],
    "total": 778,
    "average": 86.44,
    "point": 4.89,
    "grade": "A",
    "rank": 7
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "13",
    "reg": "",
    "name": "জোবায়েদ হো: তাছিব",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 85
      },
      {
        "name": "আরবী লিখা",
        "marks": 65
      },
      {
        "name": "বাংলা",
        "marks": 70
      },
      {
        "name": "ইংরেজী",
        "marks": 60
      },
      {
        "name": "গণিত",
        "marks": 72
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 77
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 80
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 85
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 85
      }
    ],
    "total": 679,
    "average": 75.44,
    "point": 4.33,
    "grade": "A",
    "rank": 10
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "14",
    "reg": "",
    "name": "বিবি মরিয়ম",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": "*"
      },
      {
        "name": "আরবী লিখা",
        "marks": "*"
      },
      {
        "name": "বাংলা",
        "marks": "*"
      },
      {
        "name": "ইংরেজী",
        "marks": "*"
      },
      {
        "name": "গণিত",
        "marks": "*"
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": "*"
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": "*"
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": "*"
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": "*"
      }
    ],
    "total": null,
    "average": null,
    "point": null,
    "grade": "অনুপস্থিত",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "15",
    "reg": "",
    "name": "আবরার আহমদ",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 95
      },
      {
        "name": "আরবী লিখা",
        "marks": 80
      },
      {
        "name": "বাংলা",
        "marks": 75
      },
      {
        "name": "ইংরেজী",
        "marks": 84
      },
      {
        "name": "গণিত",
        "marks": 83
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 93
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 80
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 75
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 75
      }
    ],
    "total": 740,
    "average": 82.22,
    "point": 4.67,
    "grade": "A",
    "rank": 8
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "16",
    "reg": "",
    "name": "সাফওয়ান সাদিদ",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": "*"
      },
      {
        "name": "আরবী লিখা",
        "marks": "*"
      },
      {
        "name": "বাংলা",
        "marks": "*"
      },
      {
        "name": "ইংরেজী",
        "marks": "*"
      },
      {
        "name": "গণিত",
        "marks": "*"
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": "*"
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": "*"
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": "*"
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": "*"
      }
    ],
    "total": null,
    "average": null,
    "point": null,
    "grade": "অনুপস্থিত",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "17",
    "reg": "",
    "name": "কলি আক্তার",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 70
      },
      {
        "name": "আরবী লিখা",
        "marks": 65
      },
      {
        "name": "বাংলা",
        "marks": 85
      },
      {
        "name": "ইংরেজী",
        "marks": 92
      },
      {
        "name": "গণিত",
        "marks": 77
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 72
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 70
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 65
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 55
      }
    ],
    "total": 651,
    "average": 72.33,
    "point": 4,
    "grade": "A",
    "rank": 12
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "18",
    "reg": "",
    "name": "নাহিদ হাসান",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 70
      },
      {
        "name": "আরবী লিখা",
        "marks": 45
      },
      {
        "name": "বাংলা",
        "marks": 40
      },
      {
        "name": "ইংরেজী",
        "marks": 40
      },
      {
        "name": "গণিত",
        "marks": 38
      },
      {
        "name": "পরি: পরি: ও সাধা: জ্ঞান",
        "marks": 60
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 70
      },
      {
        "name": "আদ: সালাত ও আদ: মাসনূনাহ",
        "marks": 60
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 50
      }
    ],
    "total": 473,
    "average": 52.56,
    "point": 2.78,
    "grade": "C",
    "rank": 14
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "80-100",
    "reg": "",
    "name": "অ+",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 5
      }
    ],
    "total": null,
    "average": 5.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "70-79",
    "reg": "",
    "name": "অ",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 4
      }
    ],
    "total": null,
    "average": 4.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "60-79",
    "reg": "",
    "name": "অ-",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 3.5
      }
    ],
    "total": null,
    "average": 3.5,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "50-79",
    "reg": "",
    "name": "ই",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 3
      }
    ],
    "total": null,
    "average": 3.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "40-79",
    "reg": "",
    "name": "ঈ",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 2
      }
    ],
    "total": null,
    "average": 2.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "33-79",
    "reg": "",
    "name": "উ",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 1
      }
    ],
    "total": null,
    "average": 1.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-2",
    "classBn": "দ্বিতীয় শ্রেণি",
    "roll": "0-32",
    "reg": "",
    "name": "ঋ",
    "subjects": [
      {
        "name": "কুরআন ও তাজবীদ",
        "marks": 0
      }
    ],
    "total": null,
    "average": 0.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-3",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "1",
    "reg": "",
    "name": "মারইয়াম সুলতান",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 100
      },
      {
        "name": "আরবী লিখা",
        "marks": 98
      },
      {
        "name": "বাংলা",
        "marks": 99
      },
      {
        "name": "ইংরেজী",
        "marks": 98
      },
      {
        "name": "গণিত",
        "marks": 87
      },
      {
        "name": "সমাজ, বিজ্ঞান ও সাধারণ জ্ঞান",
        "marks": 98
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 98
      },
      {
        "name": "আদ:সালাত ও মাসনুনাহ",
        "marks": 95
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 100
      }
    ],
    "total": 873,
    "average": 97,
    "point": 5,
    "grade": "A+",
    "rank": "২য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-3",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "2",
    "reg": "",
    "name": "নাজিফা হোসাইন",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 95
      },
      {
        "name": "আরবী লিখা",
        "marks": 100
      },
      {
        "name": "বাংলা",
        "marks": 100
      },
      {
        "name": "ইংরেজী",
        "marks": 94
      },
      {
        "name": "গণিত",
        "marks": 95
      },
      {
        "name": "সমাজ, বিজ্ঞান ও সাধারণ জ্ঞান",
        "marks": 100
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 99
      },
      {
        "name": "আদ:সালাত ও মাসনুনাহ",
        "marks": 97
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 100
      }
    ],
    "total": 880,
    "average": 97.78,
    "point": 5,
    "grade": "A+",
    "rank": "১ম"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-3",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "3",
    "reg": "",
    "name": "তৌফিকুল ইসলাম",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 90
      },
      {
        "name": "আরবী লিখা",
        "marks": 85
      },
      {
        "name": "বাংলা",
        "marks": 82
      },
      {
        "name": "ইংরেজী",
        "marks": 65
      },
      {
        "name": "গণিত",
        "marks": 61
      },
      {
        "name": "সমাজ, বিজ্ঞান ও সাধারণ জ্ঞান",
        "marks": 64
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 95
      },
      {
        "name": "আদ:সালাত ও মাসনুনাহ",
        "marks": 85
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 95
      }
    ],
    "total": 722,
    "average": 80.22,
    "point": 4.5,
    "grade": "A",
    "rank": "৩য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-3",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "4",
    "reg": "",
    "name": "মনিরম্নল ইসলাম",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 70
      },
      {
        "name": "আরবী লিখা",
        "marks": 65
      },
      {
        "name": "বাংলা",
        "marks": 55
      },
      {
        "name": "ইংরেজী",
        "marks": 34
      },
      {
        "name": "গণিত",
        "marks": 33
      },
      {
        "name": "সমাজ, বিজ্ঞান ও সাধারণ জ্ঞান",
        "marks": 60
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 85
      },
      {
        "name": "আদ:সালাত ও মাসনুনাহ",
        "marks": 80
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 88
      }
    ],
    "total": 570,
    "average": 63.33,
    "point": 3.44,
    "grade": "B",
    "rank": 4
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-3",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "5",
    "reg": "",
    "name": "ইসমাত মাকছুরাহ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 75
      },
      {
        "name": "আরবী লিখা",
        "marks": 75
      },
      {
        "name": "বাংলা",
        "marks": 65
      },
      {
        "name": "ইংরেজী",
        "marks": 40
      },
      {
        "name": "গণিত",
        "marks": 33
      },
      {
        "name": "সমাজ, বিজ্ঞান ও সাধারণ জ্ঞান",
        "marks": 58
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 80
      },
      {
        "name": "আদ:সালাত ও মাসনুনাহ",
        "marks": 65
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 78
      }
    ],
    "total": 569,
    "average": 63.22,
    "point": 3.33,
    "grade": "B",
    "rank": 5
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-3",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "6",
    "reg": "",
    "name": "উম্েম হাফসা",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 70
      },
      {
        "name": "আরবী লিখা",
        "marks": 55
      },
      {
        "name": "বাংলা",
        "marks": 64
      },
      {
        "name": "ইংরেজী",
        "marks": 30
      },
      {
        "name": "গণিত",
        "marks": 25
      },
      {
        "name": "সমাজ, বিজ্ঞান ও সাধারণ জ্ঞান",
        "marks": 71
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 70
      },
      {
        "name": "আদ:সালাত ও মাসনুনাহ",
        "marks": 60
      },
      {
        "name": "হাদিস ও আস:হুসনা",
        "marks": 75
      }
    ],
    "total": 520,
    "average": 57.78,
    "point": 2.89,
    "grade": "C",
    "rank": 6
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-3",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "7",
    "reg": "",
    "name": "&আবির হোসেন",
    "subjects": [],
    "total": null,
    "average": null,
    "point": null,
    "grade": "অনুপস্থিত",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-3",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "80-100",
    "reg": "",
    "name": "অ+",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 5
      }
    ],
    "total": null,
    "average": 5.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-3",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "70-79",
    "reg": "",
    "name": "অ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 4
      }
    ],
    "total": null,
    "average": 4.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-3",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "60-79",
    "reg": "",
    "name": "অ-",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 3.5
      }
    ],
    "total": null,
    "average": 3.5,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-3",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "50-79",
    "reg": "",
    "name": "ই",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 3
      }
    ],
    "total": null,
    "average": 3.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-3",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "40-79",
    "reg": "",
    "name": "ঈ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 2
      }
    ],
    "total": null,
    "average": 2.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-3",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "33-79",
    "reg": "",
    "name": "উ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 1
      }
    ],
    "total": null,
    "average": 1.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-3",
    "classBn": "তৃতীয় শ্রেণি",
    "roll": "0-32",
    "reg": "",
    "name": "ঋ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ ও তাজবীদ",
        "marks": 0
      }
    ],
    "total": null,
    "average": 0.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "1",
    "reg": "",
    "name": "সাবরিনা তাওসিন",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 85
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 69
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 43
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 79
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 90
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 41
      },
      {
        "name": "গণিত",
        "marks": 44
      }
    ],
    "total": 451,
    "average": 64.43,
    "point": 3.36,
    "grade": "B",
    "rank": 5
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "2",
    "reg": "",
    "name": "তাসপ্রিয়া জাহান",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 96
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 95
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 50
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 85
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 90
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 53
      },
      {
        "name": "গণিত",
        "marks": 50
      }
    ],
    "total": 519,
    "average": 74.14,
    "point": 4.14,
    "grade": "A",
    "rank": "১ম"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "3",
    "reg": "",
    "name": "ফাওজিয়া তাবাসসুম",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 84
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 80
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 71
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 56
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 67
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 47
      },
      {
        "name": "গণিত",
        "marks": 71
      }
    ],
    "total": 476,
    "average": 68,
    "point": 3.79,
    "grade": "A-",
    "rank": "৩য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "4",
    "reg": "",
    "name": "জান্নাতুল ফেরদৌস",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 80
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 74
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 80
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 44
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 92
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 57
      },
      {
        "name": "গণিত",
        "marks": 43
      }
    ],
    "total": 470,
    "average": 67.14,
    "point": 3.71,
    "grade": "A-",
    "rank": 4
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "5",
    "reg": "",
    "name": "উম্েম আয়মান",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 76
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 48
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 64
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 37
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 70
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 49
      },
      {
        "name": "গণিত",
        "marks": 42
      }
    ],
    "total": 386,
    "average": 55.14,
    "point": 2.64,
    "grade": "C",
    "rank": 6
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "6",
    "reg": "",
    "name": "ইসরাত জাহান",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 44
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 35
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 40
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 33
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 45
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 35
      },
      {
        "name": "গণিত",
        "marks": 38
      }
    ],
    "total": 270,
    "average": 38.57,
    "point": 1.43,
    "grade": "D",
    "rank": 8
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "7",
    "reg": "",
    "name": "সাদিয়া আক্তার",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 93
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 93
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 66
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 56
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 88
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 46
      },
      {
        "name": "গণিত",
        "marks": 35
      }
    ],
    "total": 477,
    "average": 68.14,
    "point": 3.5,
    "grade": "A-",
    "rank": "২য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "8",
    "reg": "",
    "name": "আফরিন সুলতানা",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 38
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 40
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 33
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 33
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 40
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 33
      },
      {
        "name": "গণিত",
        "marks": 33
      }
    ],
    "total": 250,
    "average": 35.71,
    "point": 1.29,
    "grade": "D",
    "rank": 9
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "9",
    "reg": "",
    "name": "মরিয়ম মাহবুব",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 34
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 35
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 33
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 33
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 40
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 33
      },
      {
        "name": "গণিত",
        "marks": 33
      }
    ],
    "total": 241,
    "average": 34.43,
    "point": 1.14,
    "grade": "D",
    "rank": 10
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "10",
    "reg": "",
    "name": "মরিয়ম কামরম্নল",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 44
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 52
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 33
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 33
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 40
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 33
      },
      {
        "name": "গণিত",
        "marks": 35
      }
    ],
    "total": 270,
    "average": 38.57,
    "point": 1.57,
    "grade": "D",
    "rank": 8
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "11",
    "reg": "",
    "name": "তাসলিমা মীম",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 45
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 40
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 44
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 38
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 52
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 48
      },
      {
        "name": "গণিত",
        "marks": 35
      }
    ],
    "total": 302,
    "average": 43.14,
    "point": 1.86,
    "grade": "D",
    "rank": 7
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "80-100",
    "reg": "",
    "name": "অ+",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 5
      }
    ],
    "total": null,
    "average": 5.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "70-79",
    "reg": "",
    "name": "অ",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 4
      }
    ],
    "total": null,
    "average": 4.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "60-79",
    "reg": "",
    "name": "অ-",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 3.5
      }
    ],
    "total": null,
    "average": 3.5,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "50-79",
    "reg": "",
    "name": "ই",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 3
      }
    ],
    "total": null,
    "average": 3.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "40-79",
    "reg": "",
    "name": "ঈ",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 2
      }
    ],
    "total": null,
    "average": 2.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "33-79",
    "reg": "",
    "name": "উ",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 1
      }
    ],
    "total": null,
    "average": 1.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-4",
    "classBn": "চতুর্থ শ্রেণি",
    "roll": "0-32",
    "reg": "",
    "name": "ঋ",
    "subjects": [
      {
        "name": "ইশরম্ননা দারসান",
        "marks": 0
      }
    ],
    "total": null,
    "average": 0.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-5",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "1",
    "reg": "",
    "name": "মিশকাতুল জান্নাত",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 84
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 60
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 65
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 54
      },
      {
        "name": "এসো আরবী শিখি",
        "marks": 67
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 40
      },
      {
        "name": "গণিত",
        "marks": 33
      }
    ],
    "total": 403,
    "average": 57.57,
    "point": 3.07,
    "grade": "B",
    "rank": "৩য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-5",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "2",
    "reg": "",
    "name": "মিফতাহুল মাহিরা",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 80
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 78
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 51
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 60
      },
      {
        "name": "এসো আরবী শিখি",
        "marks": 83
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 35
      },
      {
        "name": "গণিত",
        "marks": 55
      }
    ],
    "total": 442,
    "average": 63.14,
    "point": 3.5,
    "grade": "A-",
    "rank": "২য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-5",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "3",
    "reg": "",
    "name": "রাইসা আক্তার",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 50
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 44
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 33
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 40
      },
      {
        "name": "এসো আরবী শিখি",
        "marks": 38
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 35
      },
      {
        "name": "গণিত",
        "marks": 33
      }
    ],
    "total": 273,
    "average": 39,
    "point": 1.57,
    "grade": "D",
    "rank": 5
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-5",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "4",
    "reg": "",
    "name": "সুমাইয়া আক্তার",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 78
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 50
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 33
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 42
      },
      {
        "name": "এসো আরবী শিখি",
        "marks": 57
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 33
      },
      {
        "name": "গণিত",
        "marks": 33
      }
    ],
    "total": 326,
    "average": 46.57,
    "point": 2.14,
    "grade": "C",
    "rank": 4
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-5",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "5",
    "reg": "",
    "name": "মাইমুনা নাইমা",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 95
      },
      {
        "name": "তা'লীমুল ইসলাম",
        "marks": 90
      },
      {
        "name": "বাংলা ও ব্যাকরণ",
        "marks": 94
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 80
      },
      {
        "name": "এসো আরবী শিখি",
        "marks": 92
      },
      {
        "name": "ইতিহাস, ভূগোল ও সমাজ",
        "marks": 85
      },
      {
        "name": "গণিত",
        "marks": 83
      }
    ],
    "total": 619,
    "average": 88.43,
    "point": 5,
    "grade": "A+",
    "rank": "১ম"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-5",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "80-100",
    "reg": "",
    "name": "অ+",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 5
      }
    ],
    "total": null,
    "average": 5.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-5",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "70-79",
    "reg": "",
    "name": "অ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 4
      }
    ],
    "total": null,
    "average": 4.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-5",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "60-79",
    "reg": "",
    "name": "অ-",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 3.5
      }
    ],
    "total": null,
    "average": 3.5,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-5",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "50-79",
    "reg": "",
    "name": "ই",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 3
      }
    ],
    "total": null,
    "average": 3.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-5",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "40-79",
    "reg": "",
    "name": "ঈ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 2
      }
    ],
    "total": null,
    "average": 2.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-5",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "33-79",
    "reg": "",
    "name": "উ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 1
      }
    ],
    "total": null,
    "average": 1.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-5",
    "classBn": "পঞ্চম শ্রেণি",
    "roll": "0-32",
    "reg": "",
    "name": "ঋ",
    "subjects": [
      {
        "name": "কুরআন মাজীদ",
        "marks": 0
      }
    ],
    "total": null,
    "average": 0.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "1",
    "reg": "",
    "name": "সাদিয়াতুত তানহা",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 92
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 100
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 90
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 81
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 98
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 94
      },
      {
        "name": "গণিত",
        "marks": 62
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 98
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 94
      }
    ],
    "total": 809,
    "average": 89.89,
    "point": 4.83,
    "grade": "A",
    "rank": "২য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "2",
    "reg": "",
    "name": "আরিশা সুলতান",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 65
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 75
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 66
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 90
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 85
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 61
      },
      {
        "name": "গণিত",
        "marks": 33
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 55
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 60
      }
    ],
    "total": 590,
    "average": 65.56,
    "point": 3.56,
    "grade": "A-",
    "rank": 7
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "3",
    "reg": "",
    "name": "হাফসা আক্তার",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 60
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 93
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 68
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 64
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 80
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 53
      },
      {
        "name": "গণিত",
        "marks": 33
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 70
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 77
      }
    ],
    "total": 598,
    "average": 66.44,
    "point": 3.61,
    "grade": "A-",
    "rank": 6
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "4",
    "reg": "",
    "name": "আফরিন আক্তার",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 82
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 70
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 87
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 49
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 96
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 67
      },
      {
        "name": "গণিত",
        "marks": 44
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 96
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 87
      }
    ],
    "total": 678,
    "average": 75.33,
    "point": 4.06,
    "grade": "A",
    "rank": 4
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "5",
    "reg": "",
    "name": "সানজিদা সুলতানা",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 40
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 50
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 39
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 35
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 70
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 37
      },
      {
        "name": "গণিত",
        "marks": 38
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 45
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 65
      }
    ],
    "total": 419,
    "average": 46.56,
    "point": 2.06,
    "grade": "C",
    "rank": 10
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "6",
    "reg": "",
    "name": "আনিসা তাবাচ্ছুম",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 40
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 40
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 38
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 46
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 55
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 44
      },
      {
        "name": "গণিত",
        "marks": 34
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 40
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 43
      }
    ],
    "total": 380,
    "average": 42.22,
    "point": 1.89,
    "grade": "D",
    "rank": 11
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "7",
    "reg": "",
    "name": "বিবি রোকাইয়া",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 35
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 33
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 40
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 38
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 60
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 35
      },
      {
        "name": "গণিত",
        "marks": 33
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 45
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 40
      }
    ],
    "total": 359,
    "average": 39.89,
    "point": 1.61,
    "grade": "D",
    "rank": 13
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "8",
    "reg": "",
    "name": "তাবাসসুম আক্তার",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 50
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 40
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 36
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 37
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 70
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 47
      },
      {
        "name": "গণিত",
        "marks": 33
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 52
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 62
      }
    ],
    "total": 427,
    "average": 47.44,
    "point": 2.28,
    "grade": "C",
    "rank": 9
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "9",
    "reg": "",
    "name": "ফাতেমা আক্তার",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 37
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 40
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 35
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 39
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 50
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 38
      },
      {
        "name": "গণিত",
        "marks": 34
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 60
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 46
      }
    ],
    "total": 379,
    "average": 42.11,
    "point": 1.72,
    "grade": "D",
    "rank": 12
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "10",
    "reg": "",
    "name": "বিবি যয়নব",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 91
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 99
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 90
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 75
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 90
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 95
      },
      {
        "name": "গণিত",
        "marks": 60
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 90
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 94
      }
    ],
    "total": 784,
    "average": 87.11,
    "point": 4.72,
    "grade": "A",
    "rank": "৩য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "11",
    "reg": "",
    "name": "নুসরাত জাহান",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 33
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 33
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 33
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 35
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 50
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 33
      },
      {
        "name": "গণিত",
        "marks": 33
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 33
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 35
      }
    ],
    "total": 318,
    "average": 35.33,
    "point": 1.22,
    "grade": "D",
    "rank": 15
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "12",
    "reg": "",
    "name": "তাছপ্রিয়া আক্তার",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 33
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 33
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 33
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 33
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 40
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 35
      },
      {
        "name": "গণিত",
        "marks": 33
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 35
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 36
      }
    ],
    "total": 311,
    "average": 34.56,
    "point": 1.11,
    "grade": "D",
    "rank": 16
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "13",
    "reg": "",
    "name": "আয়েশা হক",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 60
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 90
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 63
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 57
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 80
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 65
      },
      {
        "name": "গণিত",
        "marks": 60
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 60
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 75
      }
    ],
    "total": 610,
    "average": 67.78,
    "point": 3.83,
    "grade": "A-",
    "rank": 5
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "14",
    "reg": "",
    "name": "সাদিয়া রহমান",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 40
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 45
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 68
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 53
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 74
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 42
      },
      {
        "name": "গণিত",
        "marks": 38
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 61
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 58
      }
    ],
    "total": 479,
    "average": 53.22,
    "point": 2.67,
    "grade": "C",
    "rank": 8
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "15",
    "reg": "",
    "name": "হুমাইরা আক্তার",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 100
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 100
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 93
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 88
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 90
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 95
      },
      {
        "name": "গণিত",
        "marks": 100
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 100
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 95
      }
    ],
    "total": 861,
    "average": 95.67,
    "point": 5,
    "grade": "A+",
    "rank": "১ম"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "16",
    "reg": "",
    "name": "জান্নাতুল নাঈমা",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 35
      },
      {
        "name": "তারিখুল ইসলাম",
        "marks": 33
      },
      {
        "name": "বাংলা ও বাংলা ব্যাকরণ",
        "marks": 33
      },
      {
        "name": "ইংরেজি ও গ্রামার",
        "marks": 38
      },
      {
        "name": "কুরআন মাজীদ",
        "marks": 70
      },
      {
        "name": "আত-তামরীনুল কিতাবী",
        "marks": 34
      },
      {
        "name": "গণিত",
        "marks": 33
      },
      {
        "name": "বেহেশতী জেওর",
        "marks": 33
      },
      {
        "name": "মীযানুস সরফ",
        "marks": 42
      }
    ],
    "total": 351,
    "average": 39,
    "point": 1.44,
    "grade": "D",
    "rank": 14
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "80-100",
    "reg": "",
    "name": "অ+",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 5
      }
    ],
    "total": null,
    "average": 5.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "70-79",
    "reg": "",
    "name": "অ",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 4
      }
    ],
    "total": null,
    "average": 4.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "60-79",
    "reg": "",
    "name": "অ-",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 3.5
      }
    ],
    "total": null,
    "average": 3.5,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "50-79",
    "reg": "",
    "name": "ই",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 3
      }
    ],
    "total": null,
    "average": 3.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "40-79",
    "reg": "",
    "name": "ঈ",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 2
      }
    ],
    "total": null,
    "average": 2.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "33-79",
    "reg": "",
    "name": "উ",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 1
      }
    ],
    "total": null,
    "average": 1.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Class-6",
    "classBn": "ষষ্ঠ শ্রেণি",
    "roll": "0-32",
    "reg": "",
    "name": "ঋ",
    "subjects": [
      {
        "name": "এসো আরবী শিখি",
        "marks": 0
      }
    ],
    "total": null,
    "average": 0.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "1",
    "reg": "",
    "name": "মুমতাহিনা (মীম)",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 99
      },
      {
        "name": "বাংলা",
        "marks": 99
      },
      {
        "name": "ইংরেজী",
        "marks": 90
      },
      {
        "name": "গণিত",
        "marks": 92
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 98
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 70
      }
    ],
    "total": 548,
    "average": 91.33,
    "point": 4.83,
    "grade": "A",
    "rank": 7
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "2",
    "reg": "",
    "name": "মোহা: হক আনাছ",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 99
      },
      {
        "name": "বাংলা",
        "marks": 100
      },
      {
        "name": "ইংরেজী",
        "marks": 100
      },
      {
        "name": "গণিত",
        "marks": 100
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 96
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 100
      }
    ],
    "total": 595,
    "average": 99.17,
    "point": 5,
    "grade": "A+",
    "rank": "১ম"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "3",
    "reg": "",
    "name": "আব্দুলস্নাহ আ: আনাছ",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 94
      },
      {
        "name": "বাংলা",
        "marks": 90
      },
      {
        "name": "ইংরেজী",
        "marks": 90
      },
      {
        "name": "গণিত",
        "marks": 93
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 60
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 45
      }
    ],
    "total": 472,
    "average": 78.67,
    "point": 4.25,
    "grade": "A",
    "rank": 11
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "4",
    "reg": "",
    "name": "আব্দুল আলিম",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 100
      },
      {
        "name": "বাংলা",
        "marks": 98
      },
      {
        "name": "ইংরেজী",
        "marks": 100
      },
      {
        "name": "গণিত",
        "marks": 100
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 99
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 96
      }
    ],
    "total": 593,
    "average": 98.83,
    "point": 5,
    "grade": "A+",
    "rank": "২য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "5",
    "reg": "",
    "name": "ফাতেমা তাবাসসুম",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 98
      },
      {
        "name": "ইংরেজী",
        "marks": 90
      },
      {
        "name": "গণিত",
        "marks": 100
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 55
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 65
      }
    ],
    "total": 505,
    "average": 84.17,
    "point": 4.42,
    "grade": "A",
    "rank": 8
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "6",
    "reg": "",
    "name": "আবরার মাহমুদ",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 90
      },
      {
        "name": "ইংরেজী",
        "marks": 80
      },
      {
        "name": "গণিত",
        "marks": 80
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 80
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 50
      }
    ],
    "total": 477,
    "average": 79.5,
    "point": 4.67,
    "grade": "A",
    "rank": 10
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "7",
    "reg": "",
    "name": "মো: আলিমদার",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 100
      },
      {
        "name": "ইংরেজী",
        "marks": 97
      },
      {
        "name": "গণিত",
        "marks": 98
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 100
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 98
      }
    ],
    "total": 590,
    "average": 98.33,
    "point": 5,
    "grade": "A+",
    "rank": "৩য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "8",
    "reg": "",
    "name": "মাইসা জান্নাত",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 96
      },
      {
        "name": "বাংলা",
        "marks": 95
      },
      {
        "name": "ইংরেজী",
        "marks": 85
      },
      {
        "name": "গণিত",
        "marks": 85
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 99
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 98
      }
    ],
    "total": 558,
    "average": 93,
    "point": 5,
    "grade": "A+",
    "rank": 6
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "9",
    "reg": "",
    "name": "সাফওয়ান",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 97
      },
      {
        "name": "বাংলা",
        "marks": 98
      },
      {
        "name": "ইংরেজী",
        "marks": 100
      },
      {
        "name": "গণিত",
        "marks": 100
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 97
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 93
      }
    ],
    "total": 585,
    "average": 97.5,
    "point": 5,
    "grade": "A+",
    "rank": 4
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "10",
    "reg": "",
    "name": "রাইয়ান হোসেন",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 94
      },
      {
        "name": "বাংলা",
        "marks": 85
      },
      {
        "name": "ইংরেজী",
        "marks": 80
      },
      {
        "name": "গণিত",
        "marks": 70
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 80
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 80
      }
    ],
    "total": 489,
    "average": 81.5,
    "point": 4.83,
    "grade": "A",
    "rank": 9
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "11",
    "reg": "",
    "name": "ওসমান গণি",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 96
      },
      {
        "name": "বাংলা",
        "marks": 95
      },
      {
        "name": "ইংরেজী",
        "marks": 80
      },
      {
        "name": "গণিত",
        "marks": 90
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 45
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 40
      }
    ],
    "total": 446,
    "average": 74.33,
    "point": 4,
    "grade": "A",
    "rank": 12
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "12",
    "reg": "",
    "name": "আফিসা তাবাচ্ছুম",
    "subjects": [
      {
        "name": "আরবী",
        "marks": "*"
      },
      {
        "name": "বাংলা",
        "marks": "*"
      },
      {
        "name": "ইংরেজী",
        "marks": "*"
      },
      {
        "name": "গণিত",
        "marks": "*"
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": "*"
      },
      {
        "name": "হাদিস শরীফ",
        "marks": "*"
      }
    ],
    "total": null,
    "average": null,
    "point": null,
    "grade": "অনুপস্থিত",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "13",
    "reg": "",
    "name": "আব্দুলস্নাহ আ: আনাছ",
    "subjects": [
      {
        "name": "আরবী",
        "marks": "*"
      },
      {
        "name": "বাংলা",
        "marks": "*"
      },
      {
        "name": "ইংরেজী",
        "marks": "*"
      },
      {
        "name": "গণিত",
        "marks": "*"
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": "*"
      },
      {
        "name": "হাদিস শরীফ",
        "marks": "*"
      }
    ],
    "total": null,
    "average": null,
    "point": null,
    "grade": "অনুপস্থিত",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "12",
    "reg": "",
    "name": "সায়েম আলফা",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 96
      },
      {
        "name": "বাংলা",
        "marks": 95
      },
      {
        "name": "ইংরেজী",
        "marks": 98
      },
      {
        "name": "গণিত",
        "marks": 98
      },
      {
        "name": "কালিমা ও মাসাইল",
        "marks": 99
      },
      {
        "name": "হাদিস শরীফ",
        "marks": 96
      }
    ],
    "total": 582,
    "average": 97,
    "point": 5,
    "grade": "A+",
    "rank": 5
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "80-100",
    "reg": "",
    "name": "অ+",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 5
      }
    ],
    "total": null,
    "average": 5.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "70-79",
    "reg": "",
    "name": "অ",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 4
      }
    ],
    "total": null,
    "average": 4.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "60-79",
    "reg": "",
    "name": "অ-",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 3.5
      }
    ],
    "total": null,
    "average": 3.5,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "50-79",
    "reg": "",
    "name": "ই",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 3
      }
    ],
    "total": null,
    "average": 3.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "40-79",
    "reg": "",
    "name": "ঈ",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 2
      }
    ],
    "total": null,
    "average": 2.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "33-79",
    "reg": "",
    "name": "উ",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 1
      }
    ],
    "total": null,
    "average": 1.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Narsari",
    "classBn": "নার্সারি",
    "roll": "0-32",
    "reg": "",
    "name": "ঋ",
    "subjects": [
      {
        "name": "আরবী",
        "marks": 0
      }
    ],
    "total": null,
    "average": 0.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "1",
    "reg": "",
    "name": "মুহা. উমায়ের",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 75
      },
      {
        "name": "তাজবীদ",
        "marks": 88
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 91
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 90
      }
    ],
    "total": 344,
    "average": 86,
    "point": 4.75,
    "grade": "A",
    "rank": 6
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "2",
    "reg": "",
    "name": "মুহা. আব্দুলস্নাহ আল জুবায়ের",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 80
      },
      {
        "name": "তাজবীদ",
        "marks": 90
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 88
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 85
      }
    ],
    "total": 343,
    "average": 85.75,
    "point": 5,
    "grade": "A+",
    "rank": 7
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "3",
    "reg": "",
    "name": "মুহা. আরহাম ভুঁইয়া",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 84
      },
      {
        "name": "তাজবীদ",
        "marks": 84
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 92
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 88
      }
    ],
    "total": 348,
    "average": 87,
    "point": 5,
    "grade": "A+",
    "rank": 4
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "4",
    "reg": "",
    "name": "মুহা. জুবাইর হোসেন",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 82
      },
      {
        "name": "তাজবীদ",
        "marks": 95
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 94
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 90
      }
    ],
    "total": 361,
    "average": 90.25,
    "point": 5,
    "grade": "A+",
    "rank": "১ম"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "5",
    "reg": "",
    "name": "মুহা. আব্দুলস্নাহ আল শাহিন",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 80
      },
      {
        "name": "তাজবীদ",
        "marks": 94
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 92
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 84
      }
    ],
    "total": 350,
    "average": 87.5,
    "point": 5,
    "grade": "A+",
    "rank": "২য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "6",
    "reg": "",
    "name": "মুহা. শাহিন উদ্দীন",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 78
      },
      {
        "name": "তাজবীদ",
        "marks": 91
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 88
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 80
      }
    ],
    "total": 337,
    "average": 84.25,
    "point": 4.75,
    "grade": "A",
    "rank": 10
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "7",
    "reg": "",
    "name": "মুহা. আসিফ উদ্দীন",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 75
      },
      {
        "name": "তাজবীদ",
        "marks": 91
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 86
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 90
      }
    ],
    "total": 342,
    "average": 85.5,
    "point": 4.75,
    "grade": "A",
    "rank": 8
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "8",
    "reg": "",
    "name": "মুহা. নূর নবী আরিয়ান",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 60
      },
      {
        "name": "তাজবীদ",
        "marks": 91
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 75
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 75
      }
    ],
    "total": 301,
    "average": 75.25,
    "point": 4.13,
    "grade": "A",
    "rank": 16
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "9",
    "reg": "",
    "name": "মুহা. আছলাম উদ্দীন",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 78
      },
      {
        "name": "তাজবীদ",
        "marks": 92
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 90
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 86
      }
    ],
    "total": 346,
    "average": 86.5,
    "point": 4.75,
    "grade": "A",
    "rank": 5
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "10",
    "reg": "",
    "name": "মাহমুদ আউসাফ দিহান",
    "subjects": [],
    "total": null,
    "average": null,
    "point": null,
    "grade": "অনুপস্থিত",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "11",
    "reg": "",
    "name": "মুহা. ইমাম হোসেন",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 70
      },
      {
        "name": "তাজবীদ",
        "marks": 85
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 75
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 70
      }
    ],
    "total": 300,
    "average": 75,
    "point": 4.25,
    "grade": "A",
    "rank": 17
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "12",
    "reg": "",
    "name": "মুহা. সৌরভ হোসেন",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 80
      },
      {
        "name": "তাজবীদ",
        "marks": 86
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 88
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 87
      }
    ],
    "total": 341,
    "average": 85.25,
    "point": 5,
    "grade": "A+",
    "rank": 9
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "13",
    "reg": "",
    "name": "মুহা. আব্দুলস্নাহ আল সায়েম",
    "subjects": [],
    "total": null,
    "average": null,
    "point": null,
    "grade": "অনুপস্থিত",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "14",
    "reg": "",
    "name": "মুহা. সাফওয়ান ইসলাম",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 82
      },
      {
        "name": "তাজবীদ",
        "marks": 90
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 95
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 82
      }
    ],
    "total": 349,
    "average": 87.25,
    "point": 5,
    "grade": "A+",
    "rank": "৩য়"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "15",
    "reg": "",
    "name": "মুহা. আদনানুল করীম",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 75
      },
      {
        "name": "তাজবীদ",
        "marks": 78
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 84
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 70
      }
    ],
    "total": 307,
    "average": 76.75,
    "point": 4.25,
    "grade": "A",
    "rank": 14
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "16",
    "reg": "",
    "name": "মুহা. মনিরম্নল ইসলাম সাবিত",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 60
      },
      {
        "name": "তাজবীদ",
        "marks": 65
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 77
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 80
      }
    ],
    "total": 282,
    "average": 70.5,
    "point": 4,
    "grade": "A",
    "rank": 20
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "17",
    "reg": "",
    "name": "মুহা. আব্দুর রহমান",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 55
      },
      {
        "name": "তাজবীদ",
        "marks": 94
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 80
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 85
      }
    ],
    "total": 314,
    "average": 78.5,
    "point": 4.5,
    "grade": "A",
    "rank": 13
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "18",
    "reg": "",
    "name": "মুহা. জুনাইদ হোসেন",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 40
      },
      {
        "name": "তাজবীদ",
        "marks": 90
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 65
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 68
      }
    ],
    "total": 263,
    "average": 65.75,
    "point": 3.5,
    "grade": "A-",
    "rank": 24
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "19",
    "reg": "",
    "name": "মুহা. আবু সাঈদ",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 48
      },
      {
        "name": "তাজবীদ",
        "marks": 92
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 84
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 77
      }
    ],
    "total": 301,
    "average": 75.25,
    "point": 4,
    "grade": "A",
    "rank": 16
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "20",
    "reg": "",
    "name": "মুহা. লাবীব বিন সাইফুল",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 50
      },
      {
        "name": "তাজবীদ",
        "marks": 93
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 86
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 74
      }
    ],
    "total": 303,
    "average": 75.75,
    "point": 4.25,
    "grade": "A",
    "rank": 15
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "21",
    "reg": "",
    "name": "মুহা. আবু মূসা",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 48
      },
      {
        "name": "তাজবীদ",
        "marks": 80
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 70
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 72
      }
    ],
    "total": 270,
    "average": 67.5,
    "point": 3.75,
    "grade": "A-",
    "rank": 23
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "22",
    "reg": "",
    "name": "মুহা. নুহান করীম",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 68
      },
      {
        "name": "তাজবীদ",
        "marks": 84
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 87
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 84
      }
    ],
    "total": 323,
    "average": 80.75,
    "point": 4.63,
    "grade": "A",
    "rank": 11
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "23",
    "reg": "",
    "name": "মুহা. শাহাদাত হোসেন",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 70
      },
      {
        "name": "তাজবীদ",
        "marks": 88
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 75
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 82
      }
    ],
    "total": 315,
    "average": 78.75,
    "point": 4.5,
    "grade": "A",
    "rank": 12
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "24",
    "reg": "",
    "name": "মুহা. রবিউল হোসেন",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 70
      },
      {
        "name": "তাজবীদ",
        "marks": 70
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 72
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 68
      }
    ],
    "total": 280,
    "average": 70,
    "point": 3.88,
    "grade": "A-",
    "rank": 21
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "25",
    "reg": "",
    "name": "মুহা. সাব্বির হোসেন",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 68
      },
      {
        "name": "তাজবীদ",
        "marks": 50
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 65
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 60
      }
    ],
    "total": 243,
    "average": 60.75,
    "point": 3.38,
    "grade": "B",
    "rank": 25
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "26",
    "reg": "",
    "name": "মুহা. সুলাইমান",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 60
      },
      {
        "name": "তাজবীদ",
        "marks": 80
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 70
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 69
      }
    ],
    "total": 279,
    "average": 69.75,
    "point": 4,
    "grade": "A",
    "rank": 22
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "27",
    "reg": "",
    "name": "মুহা. আব্দুল মুমিন",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 60
      },
      {
        "name": "তাজবীদ",
        "marks": 84
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 75
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 75
      }
    ],
    "total": 294,
    "average": 73.5,
    "point": 4.13,
    "grade": "A",
    "rank": 19
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "28",
    "reg": "",
    "name": "মুহা. উমায়ের হাসান",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 60
      },
      {
        "name": "তাজবীদ",
        "marks": 82
      },
      {
        "name": "দোয়া ও মাসায়িল",
        "marks": 78
      },
      {
        "name": "আমল ও আখলাক",
        "marks": 78
      }
    ],
    "total": 298,
    "average": 74.5,
    "point": 4.13,
    "grade": "A",
    "rank": 18
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "80-100",
    "reg": "",
    "name": "অ+",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 5
      }
    ],
    "total": null,
    "average": 5.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "70-79",
    "reg": "",
    "name": "অ",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 4
      }
    ],
    "total": null,
    "average": 4.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "60-79",
    "reg": "",
    "name": "অ-",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 3.5
      }
    ],
    "total": null,
    "average": 3.5,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "50-79",
    "reg": "",
    "name": "ই",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 3
      }
    ],
    "total": null,
    "average": 3.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "40-79",
    "reg": "",
    "name": "ঈ",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 2
      }
    ],
    "total": null,
    "average": 2.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "33-79",
    "reg": "",
    "name": "উ",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 1
      }
    ],
    "total": null,
    "average": 1.0,
    "point": null,
    "grade": "",
    "rank": "—"
  },
  {
    "exam": "Second Term Exam",
    "examBn": "দ্বিতীয় সাময়িক পরীক্ষা",
    "className": "Hifz",
    "classBn": "হিফজ",
    "roll": "0-32",
    "reg": "",
    "name": "ঋ",
    "subjects": [
      {
        "name": "কুরআন মাজিদ",
        "marks": 0
      }
    ],
    "total": null,
    "average": 0.0,
    "point": null,
    "grade": "",
    "rank": "—"
  }
];

const exam = document.getElementById("exam");
const className = document.getElementById("className");
const form = document.getElementById("resultForm");
const message = document.getElementById("message");
const resultArea = document.getElementById("resultArea");
document.getElementById("year").textContent = "২০২৬";

const bnDigits = "০১২৩৪৫৬৭৮৯";
function bnNum(v){
  return String(v ?? "").replace(/\d/g, d => bnDigits[d]);
}
function unique(list){ return [...new Set(list)]; }
function fillSelect(select, values, placeholder){
  select.innerHTML = `<option value="">${placeholder}</option>`;
  values.forEach(v => {
    const opt=document.createElement("option");
    opt.value=v.value ?? v; opt.textContent=v.label ?? v;
    select.appendChild(opt);
  });
}
function esc(v){
  return String(v ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}

function loadFilters(){
  const exams=unique(students.map(s=>s.exam)).map(e=>({
    value:e,
    label:students.find(s=>s.exam===e).examBn
  }));
  fillSelect(exam,exams,"-- পরীক্ষা নির্বাচন করুন --");
  className.innerHTML='<option value="">-- আগে পরীক্ষা নির্বাচন করুন --</option>';
  className.disabled=true;
  const help=document.getElementById("classHelp");
  if(help) help.textContent="প্রথমে পরীক্ষা নির্বাচন করুন";
}

exam.addEventListener("change",()=>{
  const help=document.getElementById("classHelp");

  if(!exam.value){
    className.innerHTML='<option value="">-- আগে পরীক্ষা নির্বাচন করুন --</option>';
    className.disabled=true;
    if(help) help.textContent="প্রথমে পরীক্ষা নির্বাচন করুন";
    return;
  }

  const classes=unique(
    students.filter(s=>s.exam===exam.value).map(s=>s.className)
  ).map(c=>{
    const f=students.find(s=>s.exam===exam.value&&s.className===c);
    return {value:c,label:f.classBn};
  });

  fillSelect(className,classes,"-- শ্রেণি নির্বাচন করুন --");
  className.disabled = classes.length === 0;
  if(help) help.textContent = classes.length
    ? "পরীক্ষা অনুযায়ী শ্রেণি নির্বাচন করুন"
    : "এই পরীক্ষার কোনো শ্রেণির ফলাফল পাওয়া যায়নি";
});

function showResult(s){
  const rows=s.subjects.map((x,i)=>`<tr><td>${bnNum(i+1)}</td><td>${esc(x.name)}</td><td>${x.marks==='*'?'—':bnNum(x.marks)}</td></tr>`).join("");
  const pos=typeof s.rank === "number" ? bnNum(s.rank) : esc(s.rank);
  const absent=s.grade==='অনুপস্থিত' || !s.subjects.some(x=>typeof x.marks==='number');
  const status=absent ? '<span class="fail">অনুপস্থিত / অসম্পূর্ণ</span>' : (s.grade==='F' ? '<span class="fail">ফেল</span>' : '<span class="pass">উত্তীর্ণ</span>');
  const total=s.total==null?'—':bnNum(s.total);
  const avg=s.average==null?'—':bnNum(Number(s.average).toFixed(2));
  const point=s.point==null?'—':bnNum(Number(s.point).toFixed(2));
  resultArea.innerHTML=`
    <div class="result-head"><h2>দারুন নাজাত আইডিয়াল মাদ্রাসা</h2><p>${esc(s.examBn)} — ${esc(s.classBn)}</p></div>
    <div class="student-info">
      <div class="info-box"><small>পরীক্ষার্থীর নাম</small><strong>${esc(s.name)}</strong></div>
      <div class="info-box"><small>শ্রেণি</small><strong>${esc(s.classBn)}</strong></div>
      <div class="info-box"><small>রোল নম্বর</small><strong>${bnNum(s.roll)}</strong></div>
      <div class="info-box"><small>রেজিস্ট্রেশন</small><strong>${s.reg?esc(s.reg):'—'}</strong></div>
    </div>
    <div class="table-wrap"><table class="result-table">
      <thead><tr><th>ক্রম</th><th>বিষয়</th><th>নম্বর</th></tr></thead><tbody>${rows}</tbody>
    </table></div>
    <div class="summary">
      <div class="summary-box"><span>সর্বমোট নম্বর</span><strong>${total}</strong></div>
      <div class="summary-box"><span>গড়</span><strong>${avg}</strong></div>
      <div class="summary-box"><span>পয়েন্ট</span><strong>${point}</strong></div>
      <div class="summary-box"><span>অবস্থান</span><strong>${pos}</strong></div>
    </div>
    <div style="text-align:center;padding:0 20px 12px">গ্রেড: <b>${esc(s.grade||'—')}</b> &nbsp; | &nbsp; ফলাফল: ${status}</div>
    <div class="print-row"><button class="print-btn" onclick="window.print()">🖨 ফলাফল প্রিন্ট / PDF</button></div>`;
  resultArea.classList.remove("hidden");
  resultArea.scrollIntoView({behavior:"smooth",block:"start"});
}

form.addEventListener("submit",e=>{
  e.preventDefault();
  resultArea.classList.add("hidden"); message.className="message hidden";
  const ev=exam.value, cv=className.value, roll=document.getElementById("roll").value.trim();
  if(!ev||!cv||!roll){message.textContent="অনুগ্রহ করে পরীক্ষা, শ্রেণি ও রোল নম্বর পূরণ করুন।";message.className="message error";return;}
  const s=students.find(x=>x.exam===ev&&x.className===cv&&String(x.roll)===roll);
  if(!s){message.textContent="দুঃখিত! এই রোল নম্বরের কোনো ফলাফল পাওয়া যায়নি।";message.className="message error";return;}
  message.textContent="ফলাফল পাওয়া গেছে।";message.className="message success";showResult(s);
});
form.addEventListener("reset",()=>setTimeout(()=>{
  className.innerHTML='<option value="">-- আগে পরীক্ষা নির্বাচন করুন --</option>';
  className.disabled=true;
  const help=document.getElementById("classHelp");
  if(help) help.textContent="প্রথমে পরীক্ষা নির্বাচন করুন";
  message.className="message hidden";
  resultArea.classList.add("hidden");
},0));
document.getElementById("menuBtn").addEventListener("click",()=>{const n=document.getElementById("mobileMenu");n.style.display=n.style.display==="flex"?"none":"flex";});
loadFilters();
