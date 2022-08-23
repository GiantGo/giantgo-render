<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { FormDesign } from '@giantgo-render/components'

const formDesignRef = ref<InstanceType<typeof FormDesign> | null>(null)

onMounted(() => {
  formDesignRef!.value!.register('常用字段', [
    {
      name: '姓名',
      component: 'input',
      uuid: 'M24GLL8K',
      options: {
        label: '姓名',
        key: 'name',
        defaultValue: '',
        rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        width: '100%',
        placeholder: '请输入姓名',
        prefixIcon: '',
        suffixIcon: '',
        hidden: false,
        clearable: false,
        disabled: false,
        showPassword: false,
        maxlength: 50,
        showWordLimit: true
      }
    },
    {
      name: '手机',
      component: 'input',
      uuid: '79rU6e0k',
      options: {
        label: '手机',
        key: 'mobile',
        defaultValue: '',
        rules: [
          { required: true, message: '请输入手机', trigger: 'blur' },
          { pattern: '^\\d{11}$', message: '请输入正确的手机', trigger: 'blur' }
        ],
        width: '100%',
        placeholder: '请输入手机',
        prefixIcon: '',
        suffixIcon: '',
        hidden: false,
        clearable: false,
        disabled: false,
        showPassword: false,
        maxlength: 50,
        showWordLimit: true
      }
    },
    {
      name: '工作单位',
      component: 'input',
      uuid: 'VAqel5pt',
      options: {
        label: '工作单位',
        key: 'company',
        defaultValue: '',
        rules: [{ required: false, message: '请输入工作单位', trigger: 'blur' }],
        width: '100%',
        placeholder: '请输入工作单位',
        prefixIcon: '',
        suffixIcon: '',
        hidden: false,
        clearable: false,
        disabled: false,
        showPassword: false,
        maxlength: 50,
        showWordLimit: true
      }
    },
    {
      name: '职务',
      component: 'input',
      uuid: 'wwN3YpgQ',
      options: {
        label: '职务',
        key: 'position',
        defaultValue: '',
        rules: [{ required: false, message: '请输入职务', trigger: 'blur' }],
        width: '100%',
        placeholder: '请输入职务',
        prefixIcon: '',
        suffixIcon: '',
        hidden: false,
        clearable: false,
        disabled: false,
        showPassword: false,
        maxlength: 50,
        showWordLimit: true
      }
    },
    {
      name: '单位地区',
      component: 'select',
      uuid: 'dKEqRP6C',
      options: {
        label: '单位地区',
        key: 'area',
        options: { type: 'static', remote: '', items: [] },
        defaultValue: '',
        rules: [{ required: false, message: '请输入单位地区', trigger: 'blur' }],
        placeholder: '请选择单位地区',
        noDataText: '暂无数据',
        noMatchText: '无匹配数据',
        width: '100%',
        hidden: false,
        clearable: false,
        disabled: false,
        filterable: false
      }
    },
    {
      name: '邮编',
      component: 'input',
      uuid: 'sMnElkoJ',
      options: {
        label: '邮编',
        key: 'zip',
        defaultValue: '',
        rules: [
          { required: false, message: '请输入邮编', trigger: 'blur' },
          { pattern: '^\\d{6}$', message: '请输入正确的邮编', trigger: 'blur' }
        ],
        width: '100%',
        placeholder: '请输入邮编',
        prefixIcon: '',
        suffixIcon: '',
        hidden: false,
        clearable: false,
        disabled: false,
        showPassword: false,
        maxlength: 50,
        showWordLimit: true
      }
    },
    {
      name: '区号',
      component: 'input',
      uuid: 'YFydCJn3',
      options: {
        label: '区号',
        key: 'zone',
        defaultValue: '',
        rules: [
          { required: false, message: '请输入区号', trigger: 'blur' },
          { pattern: '^\\d{3,4}$', message: '请输入正确的区号', trigger: 'blur' }
        ],
        width: '100%',
        placeholder: '请输入区号',
        prefixIcon: '',
        suffixIcon: '',
        hidden: false,
        clearable: false,
        disabled: false,
        showPassword: false,
        maxlength: 50,
        showWordLimit: true
      }
    },
    {
      name: '职称',
      component: 'select',
      uuid: '3TL7IcYX',
      options: {
        label: '职称',
        key: 'title',
        options: {
          type: 'static',
          remote: '',
          items: [
            { label: '初级', value: 'Wb4bJEaM' },
            { label: '中级', value: 'CKJrM20G' },
            { label: '副高及以上', value: 'HvyaOTqM' }
          ]
        },
        defaultValue: '',
        rules: [{ required: false, message: '请输入职称', trigger: 'blur' }],
        placeholder: '请选择职称',
        noDataText: '暂无数据',
        noMatchText: '无匹配数据',
        width: '100%',
        hidden: false,
        clearable: false,
        disabled: false,
        filterable: false
      }
    },
    {
      name: '部门',
      component: 'input',
      uuid: 'vUPRWNph',
      options: {
        label: '部门',
        key: 'department',
        defaultValue: '',
        rules: [{ required: false, message: '请输入部门', trigger: 'blur' }],
        width: '100%',
        placeholder: '请输入部门',
        prefixIcon: '',
        suffixIcon: '',
        hidden: false,
        clearable: false,
        disabled: false,
        showPassword: false,
        maxlength: 50,
        showWordLimit: true
      }
    },
    {
      name: '电子邮箱',
      component: 'input',
      uuid: 'VFf9zhVe',
      options: {
        label: '电子邮箱',
        key: 'email',
        defaultValue: '',
        rules: [
          { required: false, message: '请输入电子邮箱', trigger: 'blur' },
          {
            pattern: '^([0-9A-Za-z\\-_\\.]+)@([0-9a-z]+\\.[a-z]{2,3}(\\.[a-z]{2})?)$',
            message: '请输入正确的电子邮箱',
            trigger: 'blur'
          }
        ],
        width: '100%',
        placeholder: '请输入电子邮箱',
        prefixIcon: '',
        suffixIcon: '',
        hidden: false,
        clearable: false,
        disabled: false,
        showPassword: false,
        maxlength: 50,
        showWordLimit: true
      }
    },
    {
      name: '性别',
      component: 'select',
      uuid: 'CvS2aV7a',
      options: {
        label: '性别',
        key: 'gender',
        options: {
          type: 'static',
          remote: '',
          items: [
            { label: '男', value: 'qlU9Wd1K' },
            { label: '女', value: 'dbEIxK50' }
          ]
        },
        defaultValue: '',
        rules: [{ required: false, message: '请输入性别', trigger: 'blur' }],
        placeholder: '请选择性别',
        noDataText: '暂无数据',
        noMatchText: '无匹配数据',
        width: '100%',
        hidden: false,
        clearable: false,
        disabled: false,
        filterable: false
      }
    },
    {
      name: '身份证号',
      component: 'input',
      uuid: '6dbPXCQd',
      options: {
        label: '身份证号',
        key: 'idCard',
        defaultValue: '',
        rules: [
          { required: false, message: '请输入身份证号', trigger: 'blur' },
          {
            pattern: '^[1-9]\\d{5}(18|19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$',
            message: '请输入正确的身份证号',
            trigger: 'blur'
          }
        ],
        width: '100%',
        placeholder: '请输入身份证号',
        prefixIcon: '',
        suffixIcon: '',
        hidden: false,
        clearable: false,
        disabled: false,
        showPassword: false,
        maxlength: 50,
        showWordLimit: true
      }
    },
    {
      name: '年龄',
      component: 'input',
      uuid: 'nvDCsNSn',
      options: {
        label: '年龄',
        key: 'age',
        defaultValue: '',
        rules: [
          { required: false, message: '请输入年龄', trigger: 'blur' },
          { pattern: '^\\d{1,2}$', message: '请输入正确的年龄', trigger: 'blur' }
        ],
        width: '100%',
        placeholder: '请输入年龄',
        prefixIcon: '',
        suffixIcon: '',
        hidden: false,
        clearable: false,
        disabled: false,
        showPassword: false,
        maxlength: 50,
        showWordLimit: true
      }
    }
  ])

  formDesignRef!.value!.init({
    name: '表单',
    component: 'object',
    uuid: 'root',
    options: {
      labelWidth: '120px',
      labelPosition: 'right',
      size: 'default',
      gutter: 0,
      hideRequiredAsterisk: false,
      statusIcon: false,
      remotes: {
        remote_nXABYk61: {
          title: '获取选项',
          url: 'https://run.mocky.io/v3/787ef76d-79eb-42df-8469-d98e6ff00629',
          method: 'get',
          headers: [
            {
              key: '1',
              value: '2'
            }
          ],
          params: [
            {
              key: '2',
              value: '3'
            }
          ],
          data: [
            {
              key: '3',
              value: '4'
            }
          ],
          requestHandler: 'return config;',
          responseHandler: 'return response.data;',
          errorHandler: 'return Promise.reject(error);'
        }
      }
    },
    items: [
      {
        name: '姓名',
        component: 'input',
        uuid: 'M24GLL8K',
        options: {
          label: '姓名',
          key: 'name',
          defaultValue: 'test',
          rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
          width: '100%',
          placeholder: '请输入姓名',
          prefixIcon: '',
          suffixIcon: '',
          hidden: false,
          clearable: false,
          disabled: false,
          showPassword: false,
          maxlength: 50,
          showWordLimit: true
        }
      },
      {
        name: '手机',
        component: 'input',
        uuid: '79rU6e0k',
        options: {
          label: '手机',
          key: 'mobile',
          defaultValue: '13123456789',
          rules: [
            { required: true, message: '请输入手机', trigger: 'blur' },
            { pattern: '^\\d{11}$', message: '请输入正确的手机', trigger: 'blur' }
          ],
          width: '100%',
          placeholder: '请输入手机',
          prefixIcon: '',
          suffixIcon: '',
          hidden: false,
          clearable: false,
          disabled: false,
          showPassword: false,
          maxlength: 50,
          showWordLimit: true
        }
      },
      {
        name: '工作单位',
        component: 'input',
        uuid: 'VAqel5pt',
        options: {
          label: '工作单位',
          key: 'company',
          defaultValue: '',
          rules: [{ required: false, message: '请输入工作单位', trigger: 'blur' }],
          width: '100%',
          placeholder: '请输入工作单位',
          prefixIcon: '',
          suffixIcon: '',
          hidden: false,
          clearable: false,
          disabled: false,
          showPassword: false,
          maxlength: 50,
          showWordLimit: true
        }
      },
      {
        name: '职务',
        component: 'input',
        uuid: 'wwN3YpgQ',
        options: {
          label: '职务',
          key: 'position',
          defaultValue: '',
          rules: [{ required: false, message: '请输入职务', trigger: 'blur' }],
          width: '100%',
          placeholder: '请输入职务',
          prefixIcon: '',
          suffixIcon: '',
          hidden: false,
          clearable: false,
          disabled: false,
          showPassword: false,
          maxlength: 50,
          showWordLimit: true
        }
      },
      {
        name: '单位地区',
        component: 'select',
        uuid: 'dKEqRP6C',
        options: {
          label: '单位地区',
          key: 'area',
          options: { type: 'static', remote: '', items: [] },
          defaultValue: '',
          rules: [{ required: false, message: '请输入单位地区', trigger: 'blur' }],
          placeholder: '请选择单位地区',
          noDataText: '暂无数据',
          noMatchText: '无匹配数据',
          width: '100%',
          hidden: false,
          clearable: false,
          disabled: false,
          filterable: false
        }
      },
      {
        name: '邮编',
        component: 'input',
        uuid: 'sMnElkoJ',
        options: {
          label: '邮编',
          key: 'zip',
          defaultValue: '',
          rules: [
            { required: false, message: '请输入邮编', trigger: 'blur' },
            { pattern: '^\\d{6}$', message: '请输入正确的邮编', trigger: 'blur' }
          ],
          width: '100%',
          placeholder: '请输入邮编',
          prefixIcon: '',
          suffixIcon: '',
          hidden: false,
          clearable: false,
          disabled: false,
          showPassword: false,
          maxlength: 50,
          showWordLimit: true
        }
      },
      {
        name: '职称',
        component: 'select',
        uuid: '3TL7IcYX',
        options: {
          label: '职称',
          key: 'title',
          options: {
            type: 'static',
            remote: '',
            items: [
              { label: '初级', value: 'Wb4bJEaM' },
              { label: '中级', value: 'CKJrM20G' },
              { label: '副高及以上', value: 'HvyaOTqM' }
            ]
          },
          defaultValue: '',
          rules: [{ required: false, message: '请输入职称', trigger: 'blur' }],
          placeholder: '请选择职称',
          noDataText: '暂无数据',
          noMatchText: '无匹配数据',
          width: '100%',
          hidden: false,
          clearable: false,
          disabled: false,
          filterable: false
        }
      },
      {
        name: '区号',
        component: 'input',
        uuid: 'YFydCJn3',
        options: {
          label: '区号',
          key: 'zone',
          defaultValue: '',
          rules: [
            { required: false, message: '请输入区号', trigger: 'blur' },
            { pattern: '^\\d{3,4}$', message: '请输入正确的区号', trigger: 'blur' }
          ],
          width: '100%',
          placeholder: '请输入区号',
          prefixIcon: '',
          suffixIcon: '',
          hidden: false,
          clearable: false,
          disabled: false,
          showPassword: false,
          maxlength: 50,
          showWordLimit: true
        }
      },
      {
        name: '部门',
        component: 'input',
        uuid: 'vUPRWNph',
        options: {
          label: '部门',
          key: 'department',
          defaultValue: '',
          rules: [{ required: false, message: '请输入部门', trigger: 'blur' }],
          width: '100%',
          placeholder: '请输入部门',
          prefixIcon: '',
          suffixIcon: '',
          hidden: false,
          clearable: false,
          disabled: false,
          showPassword: false,
          maxlength: 50,
          showWordLimit: true
        }
      },
      {
        name: '电子邮箱',
        component: 'input',
        uuid: 'VFf9zhVe',
        options: {
          label: '电子邮箱',
          key: 'email',
          defaultValue: '',
          rules: [
            { required: false, message: '请输入电子邮箱', trigger: 'blur' },
            {
              pattern: '^([0-9A-Za-z\\-_\\.]+)@([0-9a-z]+\\.[a-z]{2,3}(\\.[a-z]{2})?)$',
              message: '请输入正确的电子邮箱',
              trigger: 'blur'
            }
          ],
          width: '100%',
          placeholder: '请输入电子邮箱',
          prefixIcon: '',
          suffixIcon: '',
          hidden: false,
          clearable: false,
          disabled: false,
          showPassword: false,
          maxlength: 50,
          showWordLimit: true
        }
      },
      {
        name: '性别',
        component: 'select',
        uuid: 'CvS2aV7a',
        options: {
          label: '性别',
          key: 'gender',
          options: {
            type: 'static',
            remote: '',
            items: [
              { label: '男', value: 'qlU9Wd1K' },
              { label: '女', value: 'dbEIxK50' }
            ]
          },
          defaultValue: '',
          rules: [{ required: false, message: '请输入性别', trigger: 'blur' }],
          placeholder: '请选择性别',
          noDataText: '暂无数据',
          noMatchText: '无匹配数据',
          width: '100%',
          hidden: false,
          clearable: false,
          disabled: false,
          filterable: false
        }
      },
      {
        name: '身份证号',
        component: 'input',
        uuid: '6dbPXCQd',
        options: {
          label: '身份证号',
          key: 'idCard',
          defaultValue: '',
          rules: [
            { required: false, message: '请输入身份证号', trigger: 'blur' },
            {
              pattern: '^[1-9]\\d{5}(18|19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$',
              message: '请输入正确的身份证号',
              trigger: 'blur'
            }
          ],
          width: '100%',
          placeholder: '请输入身份证号',
          prefixIcon: '',
          suffixIcon: '',
          hidden: false,
          clearable: false,
          disabled: false,
          showPassword: false,
          maxlength: 50,
          showWordLimit: true
        }
      },
      {
        name: '年龄',
        component: 'input',
        uuid: 'nvDCsNSn',
        options: {
          label: '年龄',
          key: 'age',
          defaultValue: '',
          rules: [
            { required: false, message: '请输入年龄', trigger: 'blur' },
            { pattern: '^\\d{1,2}$', message: '请输入正确的年龄', trigger: 'blur' }
          ],
          width: '100%',
          placeholder: '请输入年龄',
          prefixIcon: '',
          suffixIcon: '',
          hidden: false,
          clearable: false,
          disabled: false,
          showPassword: false,
          maxlength: 50,
          showWordLimit: true
        }
      }
    ]
  })
})
</script>

<template>
  <FormDesign ref="formDesignRef" />
</template>

<style scoped></style>
