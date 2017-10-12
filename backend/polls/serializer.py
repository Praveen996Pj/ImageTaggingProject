from rest_framework import serializers
from models import Image,ImageInfo

class InfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageInfo
        fields = ('imageid','tag', 'x_cord', 'y_cord')

class ImageSerializer(serializers.ModelSerializer):
    tracks = InfoSerializer(many=True, read_only=True)

    class Meta:
        model = Image
        fields = ('id','image_path', 'tracks')