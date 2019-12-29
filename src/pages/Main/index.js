import React, { Component } from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  handleInputChange = e => {
    const newRepo = e.target.value;
    this.setState({ newRepo });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { loading } = this.state;
    // se estiver carregando um repositório
    if (loading) {
      // sai da função pra não tentar carregar outro
      return;
    }

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const { data } = await api.get(
      `/repos/${newRepo}?client_id=61dc96b8c51a5d2b9e0b&client_secret=e812178db64b10903ee5f6572cf952efbb1730f2`
    );
    // mesmo com um item só, os dados são guardados em um objeto
    // para ficar mais fácil de adicionar novos itens caso necessário
    const repository = {
      name: data.full_name,
    };

    this.setState({
      repositories: [...repositories, repository],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, loading } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton type="submit" loading-data={loading}>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
