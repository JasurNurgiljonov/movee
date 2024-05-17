import React from 'react';
import { HeaderComponent } from '../containers/header';
import { OptForm, Feature } from '../components';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

export default function Home() {
  return (
    <>
        <HeaderComponent>
            <Feature>
                <Feature.Title>
                    Unlimited films, TV programs, and more.
                </Feature.Title>
                <Feature.SubTitle>
                    Watch anywhere. Cancel at any time.
                </Feature.SubTitle>
                <OptForm>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Get started</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                </OptForm>
            </Feature>
        </HeaderComponent>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
    </>
  );
}