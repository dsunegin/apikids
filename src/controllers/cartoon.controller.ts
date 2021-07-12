import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Cartoon} from '../models';
import {CartoonRepository} from '../repositories';

export class CartoonController {
  constructor(
    @repository(CartoonRepository)
    public cartoonRepository : CartoonRepository,
  ) {}

/*  @post('/cartoons')
  @response(200, {
    description: 'Cartoon model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cartoon)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cartoon, {
            title: 'NewCartoon',
            exclude: ['id'],
          }),
        },
      },
    })
    cartoon: Omit<Cartoon, 'id'>,
  ): Promise<Cartoon> {
    return this.cartoonRepository.create(cartoon);
  }
*/

  @get('/cartoons/count')
  @response(200, {
    description: 'Cartoon model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cartoon) where?: Where<Cartoon>,
  ): Promise<Count> {
    return this.cartoonRepository.count(where);
  }

  @get('/cartoons')
  @response(200, {
    description: 'Array of Cartoon model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cartoon, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cartoon) filter?: Filter<Cartoon>,
  ): Promise<Cartoon[]> {
    return this.cartoonRepository.find(filter);
  }

/*
  @patch('/cartoons')
  @response(200, {
    description: 'Cartoon PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cartoon, {partial: true}),
        },
      },
    })
    cartoon: Cartoon,
    @param.where(Cartoon) where?: Where<Cartoon>,
  ): Promise<Count> {
    return this.cartoonRepository.updateAll(cartoon, where);
  }
*/

  @get('/cartoons/{id}')
  @response(200, {
    description: 'Cartoon model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cartoon, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Cartoon, {exclude: 'where'}) filter?: FilterExcludingWhere<Cartoon>
  ): Promise<Cartoon> {
    return this.cartoonRepository.findById(id, filter);
  }

/*
  @patch('/cartoons/{id}')
  @response(204, {
    description: 'Cartoon PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cartoon, {partial: true}),
        },
      },
    })
    cartoon: Cartoon,
  ): Promise<void> {
    await this.cartoonRepository.updateById(id, cartoon);
  }

  @put('/cartoons/{id}')
  @response(204, {
    description: 'Cartoon PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cartoon: Cartoon,
  ): Promise<void> {
    await this.cartoonRepository.replaceById(id, cartoon);
  }

  @del('/cartoons/{id}')
  @response(204, {
    description: 'Cartoon DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cartoonRepository.deleteById(id);
  }
*/
}
