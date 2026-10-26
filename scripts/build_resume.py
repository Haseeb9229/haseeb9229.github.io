"""Build the downloadable resume from the October 2026 profile."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import white, HexColor
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    KeepTogether,
    HRFlowable,
    PageBreak,
)
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_RIGHT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

pdfmetrics.registerFont(TTFont("Segoe", r"C:\Windows\Fonts\segoeui.ttf"))
pdfmetrics.registerFont(TTFont("Segoe-Bold", r"C:\Windows\Fonts\segoeuib.ttf"))

INK = HexColor("#0b1220")
CYAN = HexColor("#0e7490")
TEXT = HexColor("#1c2430")
MUTED = HexColor("#5c6b7a")
RULE = HexColor("#d5deea")

styles = {
    "name": ParagraphStyle(
        "name",
        fontName="Segoe-Bold",
        fontSize=18,
        leading=21,
        textColor=white,
    ),
    "headline": ParagraphStyle(
        "headline",
        fontName="Segoe",
        fontSize=9,
        leading=12,
        textColor=HexColor("#d7e7f5"),
    ),
    "contact": ParagraphStyle(
        "contact",
        fontName="Segoe",
        fontSize=8,
        leading=11,
        textColor=HexColor("#d7e7f5"),
    ),
    "section": ParagraphStyle(
        "section",
        fontName="Segoe-Bold",
        fontSize=10,
        leading=13,
        textColor=CYAN,
        spaceBefore=8,
        spaceAfter=3,
    ),
    "body": ParagraphStyle(
        "body",
        fontName="Segoe",
        fontSize=8.5,
        leading=11,
        textColor=TEXT,
    ),
    "role": ParagraphStyle(
        "role",
        fontName="Segoe-Bold",
        fontSize=9.5,
        leading=12,
        textColor=INK,
    ),
    "company": ParagraphStyle(
        "company",
        fontName="Segoe",
        fontSize=8,
        leading=10,
        textColor=MUTED,
    ),
    "meta": ParagraphStyle(
        "meta",
        fontName="Segoe",
        fontSize=8,
        leading=10,
        textColor=MUTED,
        alignment=TA_RIGHT,
    ),
    "bullet": ParagraphStyle(
        "bullet",
        fontName="Segoe",
        fontSize=8.5,
        leading=11,
        textColor=TEXT,
        leftIndent=9,
        bulletIndent=0,
        bulletFontName="Segoe",
    ),
}

JOBS = [
    (
        "Software Engineer",
        "MAKTA Solutions Kft.",
        "Feb 2026 – Present",
        [
            "Build Laravel, PHP, MySQL, and Node.js applications from technical discovery through production deployment.",
            "Integrate UNAS and Shoprenter for products, customers, orders, coupons, and promotions.",
            "Implement REST APIs, GraphQL, webhooks, and third-party connections, and support releases with automated tests.",
            "Optimize SQL, repair duplicate records, and ship promotions, loyalty, shipping, and order processing.",
        ],
    ),
    (
        "Laravel Developer",
        "Freelance · Lahore, Punjab, Pakistan",
        "Feb 2020 – Present",
        [
            "Build Laravel and Node.js applications, custom Shopify apps, and REST and GraphQL APIs.",
            "Create interfaces with React.js, Blade, and Shopify Polaris, and tune MongoDB and MySQL.",
            "Ship POS systems, marketplaces, payment gateways, analytics, and automation tools.",
        ],
    ),
    (
        "Shopify App Team Lead",
        "SwishTag · Lahore, Punjab, Pakistan",
        "Jan 2026 – Oct 2026",
        [
            "Led Shopify apps on Laravel, Inertia.js, and React, including GraphQL, REST, and webhooks.",
            "Directed Polaris and App Bridge embedded experiences and the Laravel, MongoDB, and MySQL architecture.",
            "Mentored developers, ran code reviews, and kept Agile releases stable.",
        ],
    ),
    (
        "Senior Software Engineer",
        "Focal Software, Inc. · Lahore, Punjab, Pakistan",
        "Jun 2026 – Sep 2026",
        [
            "Developed Laravel accounting software, including automation rules, triggers, and execution tracking.",
            "Wrote migrations, indexes, and constraints on MySQL and MariaDB inside Docker Compose.",
        ],
    ),
    (
        "Shopify App Team Lead",
        "Creative Sprout Media · Lahore, Punjab, Pakistan",
        "Jul 2025 – Mar 2026",
        [
            "Led Shopify apps on Laravel, Inertia.js, and React from planning through production.",
            "Defined GraphQL, REST, and webhook architecture, plus Polaris, App Bridge, and OAuth standards.",
            "Owned MySQL and MongoDB performance and mentored the team in Agile delivery.",
        ],
    ),
    (
        "Shopify App Developer",
        "SwishTag · Lahore, Punjab, Pakistan",
        "Feb 2024 – Dec 2025",
        [
            "Built custom apps with Laravel, Inertia.js, and React, including GraphQL, REST, and webhooks.",
            "Created Polaris and App Bridge experiences and tuned Laravel across MongoDB and MySQL.",
        ],
    ),
    (
        "Laravel Developer",
        "DeadstockAPP · Multan, Punjab, Pakistan",
        "Feb 2023 – Jan 2024",
        [
            "Built a scalable Laravel architecture with real-time bidding, REST APIs, and MySQL tuning.",
            "Added authentication, caching, payments, and notifications.",
        ],
    ),
    (
        "Laravel Developer",
        "Softsuite Technologies · Multan District, Punjab, Pakistan",
        "Jun 2022 – Jan 2023",
        [
            "Developed POS, e-learning, and social apps with Laravel, React, and Blade.",
            "Built REST APIs and improved performance, security, and database efficiency.",
        ],
    ),
    (
        "Laravel Developer",
        "Amzavenue · Multan, Punjab, Pakistan",
        "Jun 2021 – May 2022",
        [
            "Built ecommerce and automation tools on Laravel, including REST APIs and third-party integrations.",
            "Optimized MySQL and automated manual business workflows.",
        ],
    ),
    (
        "Junior Developer",
        "Funzoft Pvt. Ltd · Multan, Punjab, Pakistan",
        "Jan 2021 – May 2021",
        [
            "Worked on game mechanics, Unity and C# logic, interface design, and performance.",
        ],
    ),
]


def header_footer(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(INK)
    canvas.rect(0, A4[1] - 34 * mm, A4[0], 34 * mm, fill=1, stroke=0)
    canvas.setFillColor(HexColor("#38bdf8"))
    canvas.rect(0, A4[1] - 35.2 * mm, A4[0], 1.2 * mm, fill=1, stroke=0)
    canvas.setFillColor(MUTED)
    canvas.setFont("Segoe", 8)
    canvas.drawString(16 * mm, 8 * mm, "Haseeb Ahmed Khan  ·  Senior Software Engineer")
    canvas.drawRightString(A4[0] - 16 * mm, 8 * mm, f"{doc.page}")
    canvas.restoreState()


def job_block(role, company, dates, bullets):
    left = [
        Paragraph(role, styles["role"]),
        Paragraph(company, styles["company"]),
    ]
    when = Paragraph(dates, styles["meta"])
    head = Table(
        [[left, when]],
        colWidths=[128 * mm, 50 * mm],
    )
    head.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    parts = [Spacer(1, 2.2 * mm), head, Spacer(1, 0.4 * mm)]
    for bullet in bullets:
        parts.append(Paragraph(f"•  {bullet}", styles["bullet"]))
    return KeepTogether(parts)


def main():
    out = r"F:\haseeb9229.github.io\public\HaseebAhmed.pdf"
    doc = SimpleDocTemplate(
        out,
        pagesize=A4,
        leftMargin=16 * mm,
        rightMargin=16 * mm,
        topMargin=40 * mm,
        bottomMargin=16 * mm,
        title="Haseeb Ahmed Khan — Resume",
        author="Haseeb Ahmed Khan",
    )
    story = [
        Paragraph(
            "Senior Software Engineer focused on Laravel, Shopify apps, and ecommerce integrations. "
            "Six-plus years building REST and GraphQL APIs, Shopify public and private apps, and production backends "
            "with PHP, Node.js, MySQL, MongoDB, and Docker.",
            styles["body"],
        ),
        Paragraph("Skills", styles["section"]),
        HRFlowable(width="100%", thickness=0.4, color=RULE, spaceAfter=3),
        Paragraph(
            "<b>Backend:</b> Laravel, PHP, Node.js, MySQL, MongoDB, Docker, Docker Compose<br/>"
            "<b>Shopify:</b> Public and private apps, Polaris, App Bridge, App Extensions, webhooks, OAuth<br/>"
            "<b>APIs:</b> REST, GraphQL, UNAS, Shoprenter, third-party integrations<br/>"
            "<b>Interface:</b> React.js, Inertia.js, Remix, Blade",
            styles["body"],
        ),
        Paragraph("Experience", styles["section"]),
        HRFlowable(width="100%", thickness=0.4, color=RULE, spaceAfter=1),
    ]
    for job in JOBS:
        if job[1].startswith("DeadstockAPP"):
            story.append(PageBreak())
        story.append(job_block(*job))

    story.append(Paragraph("Education", styles["section"]))
    story.append(HRFlowable(width="100%", thickness=0.4, color=RULE, spaceAfter=3))
    story.append(
        Paragraph(
            "<b>Master's degree, Computer Science</b> · Bahauddin Zakariya University · Oct 2018 – Sep 2020",
            styles["body"],
        )
    )
    story.append(Spacer(1, 2 * mm))
    story.append(
        Paragraph("<b>Languages:</b> Urdu, English", styles["body"])
    )

    def first_page(canvas, doc):
        header_footer(canvas, doc)
        canvas.setFillColor(white)
        canvas.setFont("Segoe-Bold", 16)
        canvas.drawString(16 * mm, A4[1] - 14 * mm, "Haseeb Ahmed Khan")
        canvas.setFont("Segoe", 8.5)
        canvas.drawString(
            16 * mm,
            A4[1] - 19.5 * mm,
            "Senior Software Engineer  ·  Shopify App Developer  ·  Laravel & React",
        )
        canvas.setFont("Segoe", 8)
        canvas.drawString(
            16 * mm,
            A4[1] - 25 * mm,
            "Lahore, Punjab, Pakistan   ·   +92 307 0752398   ·   haseebahmed9229@gmail.com",
        )
        canvas.drawString(
            16 * mm,
            A4[1] - 29.5 * mm,
            "linkedin.com/in/haseebahmed-khan   ·   github.com/Haseeb9229",
        )

    def later_page(canvas, doc):
        header_footer(canvas, doc)
        canvas.setFillColor(white)
        canvas.setFont("Segoe-Bold", 12)
        canvas.drawString(16 * mm, A4[1] - 14 * mm, "Haseeb Ahmed Khan")
        canvas.setFont("Segoe", 8)
        canvas.setFillColor(HexColor("#d7e7f5"))
        canvas.drawString(16 * mm, A4[1] - 19 * mm, "Senior Software Engineer  ·  Lahore, Punjab, Pakistan")
        canvas.drawString(16 * mm, A4[1] - 24 * mm, "haseebahmed9229@gmail.com  ·  +92 307 0752398")

    doc.build(story, onFirstPage=first_page, onLaterPages=later_page)
    print(out)


if __name__ == "__main__":
    main()
