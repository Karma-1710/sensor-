import discord
from discord import channel
from skimage.metrics import structural_similarity
import cv2
import urllib
import numpy as np

intents = discord.Intents.default()
intents.presences = True
intents.members = True
client = discord.Client()


@client.event
async def on_ready():
    print("Bot is READY")
    print(discord.__version__)
    # print(datetime.datetime.now())

@client.event
async def on_message(message):
    if message.channel.id == 941951141095276554 and message.author != client.user :
        print(message)
        print(message.attachments[0].url)
        await message.channel.send(f"{message.author.mention} is now level! congrats!")
        from urllib.request import urlopen, Request

        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.3'}
        req = Request(url=message.attachments[0].url, headers=headers)

        # img1 = cv2.imshow("images/img1.png", 0)
        await message.channel.send(message.attachments[0].url)
        img2 = cv2.imread('images/img2.png', 0)
        img1 = open('aaaaaa.png', 'wb')

        with urlopen(req) as response:
            img1.write(response.read())

        img1 = cv2.imread('aaaaaa.png', 0)
        def orb_sim(img1, img2):

            orb = cv2.ORB_create()

            kp_a, desc_a = orb.detectAndCompute(img1, None)
            kp_b, desc_b = orb.detectAndCompute(img2, None)

            bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)

            matches = bf.match(desc_a, desc_b)

            similar_regions = [i for i in matches if i.distance < 75]
            if len(matches) == 0:
                return 0
            return len(similar_regions) / len(matches)

        def structural_sim(img1, img2):
            sim, diff = structural_similarity(img1, img2, full=True)
            return sim



        orb_similarity = orb_sim(img1, img2)

        print("Similarity using ORB is: ", orb_similarity)
        from skimage.transform import resize

        # img5 = resize(img2, (img1.shape[0], img1.shape[1]), anti_aliasing=True, preserve_range=True)

        ssim = structural_sim(img1, img2)
        print("Similarity using SSIM is: ", ssim)

client.run("your-token")