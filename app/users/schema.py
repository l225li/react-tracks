from django.contrib.auth import get_user_model
import graphene
from graphene_django import DjangoObjectType

class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()

class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate(self, info, **kwargs):
        user = get_user_model()(
          username=kwargs.get('username'),
          email=kwargs.get('email')
        )
        user.set_password(kwargs.get('password'))
        user.save()
        return CreateUser(user)

class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()

