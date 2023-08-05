import openai


def getCategories(apiKey, input):
    openai.api_key = apiKey
    prompt = "Given the prompt \"" + input + "\" please give me the categories that are relevant to it from this list. " \
        "[Black, White, Red, Blue, Orange, Yellow, Green, Blue, Indigo, Top, Bottom, Full Body, Shirt, T-Shirt, Pants, Long Pant, Long Sleeved Shirt, Dress]" \
        "Please respond only with the categories without any other words"
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        temperature = 0.2,
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ]
    )

    unprocessedArr = completion.choices[0].message.content.split(", ")
    color = []
    type = []
    for categories in unprocessedArr:
        if categories in ["Black", "White", "Red", "Blue", "Orange", "Yellow", "Green", "Blue", "Indigo"]:
            color.append(categories)
        elif categories in ["Top", "Bottom", "Full Body", "Shirt", "T-Shirt", "Pants", "Long Pant", "Long Sleeved Shirt", "Dress"]:
            type.append(categories)
    return [color, type]